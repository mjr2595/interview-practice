import csv
import itertools


# *** Question 1 ***

def db_load_file(db, filename):
    cur = db.cursor()
    cur.execute('''CREATE TABLE tansaction (
        id              integer,
        customer_id     integer,
        trans_code      char(4),
        trans_amount    intger)''')
    f = open(filename)
    r = csv.reader(f)
    for line in f:
        cur.execute('''
            INSERT INTO transaction (id, customer_id, trans_code, trans_amount)
            VALUES (?,?,?,?)''', r)
    db.commit()

# *** Question 2 ***

def patterns_to_ranges(patterns, range_len = 6):
    ret = dict([])
    visited = list()
    # sort patterns by length
    sorted_pat = sorted(patterns, key=len, reverse=True)
    # new list of scaled numbers
    temp = [get_range(x, range_len) for x in sorted_pat]
    scaled_p = [x[0] for x in temp]
    visited_breaks = list()
    for num in sorted_pat:
        ranges = list()
        # make a list of of numbers in visited with a range conflict
        conflicts = list()
        curr_range = get_range(num, range_len) # largest possible range
        for v in visited:
            # scale v, then check
            scaled_v = get_range(v, range_len)[0]
            if scaled_v in range(curr_range[0], curr_range[1] + 1):
                conflicts.append(v)

        if not conflicts:
            # map(str(curr_range))
            ranges.append(curr_range) # no conflict, just add
        else:
            # handle conflicts
            # get a list of each break point caused by conflicts
            conflicts = sorted(conflicts, key=int)
            temp = [ret[x] for x in conflicts]
            scaled_breaks = list(itertools.chain(*temp))
            scaled_breaks = list(itertools.chain(*scaled_breaks))
            # add scaled num to new list
            edited_b = [curr_range[0]]
            for b in scaled_breaks:
                # check if proper break point   and (b != curr_range[1]) and (b > edited_b[-1])
                if (b not in visited_breaks) and (b != curr_range[1]) and (b > edited_b[-1]):
                    last_digit = b % 10
                    if last_digit == 0:
                        b -= 1
                    elif last_digit == 9:
                        b += 1
                    prev_last_digit = edited_b[-1] % 10
                    new_last_digit = b % 10
                    if prev_last_digit != new_last_digit:
                        visited_breaks.append(b)
                        edited_b.append(b)

            edited_b.append(curr_range[1])
            visited_breaks.append(curr_range[1])

            # make list of breaks into list of tuples
            ranges.append(edited_b)
            it = iter(edited_b)
            tup_b = list(zip(it, it))
            ranges = tup_b
            del edited_b
            if v in conflicts:
                conflicts.remove(v)
        
        # add range list to dict and num to visited
        ret[num] = ranges
        visited.append(num)

    return ret

# helper function, returns the scaled range as a tuple
def get_range(num, factor):
    padding = factor - len(num)
    scale = 10**(padding)
    # current number scaled to proper len
    begin = int(num) * scale
    end = begin + (scale-1)
    return begin, end

# p1 = ['52', '525', '524', '52489', '6']
p1 = ['52', '524', '525', '526', '52489', '6']
p2 = ['528', '523', '52']
p3 = ['52', '529', '523']
p4 = ['52', '529', '523', '528']

print("TEST: " + str(patterns_to_ranges(p1, 6)))

# *** Question 3 ***

# 3a) m=audio 123 RTP/AVP 0 1

# The "123" in the previous Media Descriptor represents the port number in which the caller supports RTP audio.

# 3b)

# To: sip:5125557777@networkip.net

# To: 5125557777 <sip:5125557777@networkip.net:12000>;tag=a5+2?391  // INVALID - sender's IP is not appended to the tag

# To: 512555 <sip:512555@networkip.net;lr;tcp>                      // INVALID - extra invalid info in userinfo section

# To: 5125557777 <sip:5125557777>                                   // INVALID - does not contain a complete URI, missing server

# To: Tony <sip:Peter@networkip.net>

# To: <sips:5125557777@networkip.net>