import java.util.Arrays;
// Rotates a square matrix clockwise in place
// key is to go through layer by layer
public class Rotator {

    public static void main(String[] args) {
        int[][] test = new int [][]{{1,2,3,4,5},
                                    {1,2,3,4,5},
                                    {1,2,3,4,5},
                                    {1,2,3,4,5},
                                    {1,2,3,4,5}};
        rotate(test);
        System.out.println(Arrays.deepToString(test));
    }

    public static void rotate(int[][] m) {
        int n = m.length;
        // layer by layer
        for (int layer = 0; layer < n/2; layer++) {
            int first = layer;
            int last = n - layer - 1;
            // now index by index
            for (int i = first; i < last; i++) {
                int offset = i - layer;
                // save top
                int top = m[first][i];
                // left -> top
                m[first][i] = m[last-offset][first];
                // bottom -> left
                m[last-offset][first] = m[last][last-offset];
                // right -> bottom
                m[last][last-offset] = m[i][last];
                // top -> right
                m[i][last] = top;
            }
        }
    }
}
