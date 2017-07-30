public class MinLengthWord {

	public static void main(String args[]) {
		String[] dic = { "addds", "asdfoisfiodijf" };
		char[] c = { 'a', 's', 's' };
		char[] j = { 'j'};
		System.out.println(minLengthWord(c, dic));
		System.out.println(minLengthWord(j, dic));
	}

	public static String minLengthWord(char[] chars, String[] dic) {
		int min = Integer.MAX_VALUE;
		int minIndex = -1;

		for (int i = 0; i < dic.length; i++) {
			String currWord = dic[i];
			// Check if current word (dic[i]) is big enough to contain all characters and smaller than
			// current smallest word min == Integer.MAX_VALUE)
			if (currWord.length() >= chars.length && currWord.length() < min) {
				// Check if current word contains all characters in chars
				if (containsAll(currWord, chars)) {
					min = currWord.length();
					minIndex = i;
				}
			}
		}

		if (minIndex == -1) {
			System.out.println("No words found that contain all characters.");
			return null;
		} else {
			return dic[minIndex];
		}
	}

	public static boolean containsAll(String s, char[] chars) {
		boolean[] c = new boolean[256];

		for (int j = 0; j < s.length(); j++) {
			c[(int) s.charAt(j)] = true;
		}
		for (int j = 0; j < chars.length; j++) {
			if (!c[(int) chars[j]]) {
				return false;
			}
		}
		return true;
	}
}
