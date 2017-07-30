public class LeastDisruptiveRange {

    public static void main(String[] args) {
        int[] og = {1,2,3,4,5};
        int[] rep = {3,5,3};
        System.out.println(findRange(og, rep));
    }

    public static int findRange(int[] original, int[] replacement) {
        int smallestIndex = 0;
        int smallestSum = Integer.MAX_VALUE;
        for (int i = 0; i <= original.length - replacement.length; i++) {
            int currDistanceSum = 0;
            for (int j = i; j < replacement.length; j++) {
                int distance = Math.abs(original[i+j] - replacement[j]);
                currDistanceSum += distance;
            }
            if (currDistanceSum < smallestSum) {
                smallestSum = currDistanceSum;
                smallestIndex = i;
            }
        }
        return smallestIndex;
    }
}
