public class Conflicts {

    public static void main(String[] args) {
        int[][] t1 = new int [][] {
            {1,3},
            {3,5},
            {4,5},
            {5,8},
            {6,7}
        };
        int[][] t2 = new int [][] {
            {1,10},
            {2,3},
            {3,4},
            {10,11}
        };
        System.out.println(findConflicts(t1));
        System.out.println(findConflicts(t2));
    }

    public static int findConflicts(int[][] cal) {
        int numberOfConflicts = 0;
        int openEventEnd = cal[0][1];
        for (int i = 1; i < cal.length; i++) {
            if (cal[i][0] < openEventEnd) {
                numberOfConflicts++;
            }
            openEventEnd = Math.max(cal[i][1], openEventEnd);
        }
        return numberOfConflicts;
    }
}
