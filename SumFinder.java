import java.util.*;

public class SumFinder {

  public static void main(String[] args) {
    int a[] = {1, 4, 45, 6, 10, -8};
    System.out.println(existsPair(a, -4));
    int sorted[] = {2, 2, 4, 5, 6, 7, 40};
    System.out.println(existsPairSorted(sorted, 12));
  }

  public static boolean existsPairSorted(int[] a, int target) {
    int l = 0;
    int r = a.length - 1;
    while (l < r) {
      int sum = a[l] + a[r];
      if (sum == target) {
        System.out.println(a[l] + " + " + a[r] + " = " + target);
        return true;
      }
      else if (sum < target) l++;
      else r--; // sum > target
    }
    return false;
  }

  public static boolean existsPair(int[] a, int target) {
    HashSet<Integer> comp = new HashSet<Integer>();
    for (int value : a) {
      if (comp.contains(value)) {
        //System.out.println(a[value] + " + " + a[r] + " = " + target);
        return true;
      }
      comp.add(target-value);
    }
    return false;
  }
}
