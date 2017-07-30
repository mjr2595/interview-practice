/*
 *  Java Program to Implement Unrolled Linked List
 */

import java.util.Scanner;

/*  Class ULLNode  */
class ULLNode
{
    ULLNode next;
    int numElements;
    int array[];

    /* Constructor */
    public ULLNode(int n)
    {
        next = null;
        numElements = 0;
        array = new int[n];
    }
}

/* Class UnrolledLinkedList */
class UnrolledLinkedList
{
    private ULLNode start;
    private ULLNode end;
    private int sizeNode;
    private int nNode;

    /* Constructor */
    public UnrolledLinkedList(int capacity)
    {
        start = null;
        end = null;
        nNode = 0;
        sizeNode = capacity + 1;
    }
    /*  Function to check if list is empty  */
    public boolean isEmpty()
    {
        return start == null;
    }
    /*  Function to get size of list  */
    public int getSize()
    {
        return nNode;
    }
    /* Function to clear list */
    public void makeEmpty()
    {
        start = null;
        end = null;
        nNode = 0;
    }
    /* Function to insert element */
    public void insert(int x)
    {
        nNode++;
        if (start == null)
        {
            start = new ULLNode(sizeNode);
            start.array[0] = x;
            start.numElements++;
            end = start;
            return;
        }
        if (end.numElements + 1 < sizeNode)
        {
            end.array[end.numElements] = x;
            end.numElements++;
        }
        else
        {
            ULLNode nptr = new ULLNode(sizeNode);
            int j = 0;
            for (int i = end.numElements / 2 + 1; i < end.numElements; i++)
                nptr.array[j++] = end.array[i];
            nptr.array[j++] = x;
            nptr.numElements = j;
            end.numElements = end.numElements/2 + 1;
            end.next = nptr;
            end = nptr;
        }
    }
    /* Function to display list */
    public void display()
    {
        System.out.print("\nUnrolled Linked List = ");
        if (nNode == 0)
        {
            System.out.print("empty\n");
            return;
        }
        System.out.println();
        ULLNode ptr = start;
        while (ptr != null)
        {
            for (int i = 0; i < ptr.numElements; i++)
                System.out.print(ptr.array[i] +" ");
            System.out.println();
            ptr = ptr.next;
        }
    }

}

/*  Class UnrolledLinkedListTest  */
public class UnrolledLinkedListTest
{
    public static void main(String[] args)
    {
        Scanner scan = new Scanner(System.in);
        System.out.println("Unrolled Linked List Test\n");
        System.out.println("Enter array size of each node");
        /* Creating object of class UnrolledLinkedList */
        UnrolledLinkedList ull = new UnrolledLinkedList(scan.nextInt() );

        char ch;
        /*  Perform list operations  */
        do
        {
            System.out.println("\nUnrolled Linked List Operations\n");
            System.out.println("1. insert");
            System.out.println("2. check empty");
            System.out.println("3. get size");
            System.out.println("4. clear");
            int choice = scan.nextInt();
            switch (choice)
            {
            case 1 :
                System.out.println("Enter integer element to insert");
                ull.insert( scan.nextInt() );
                break;
            case 2 :
                System.out.println("Empty status = "+ ull.isEmpty());
                break;
            case 3 :
                System.out.println("Size = "+ ull.getSize() +" \n");
                break;
            case 4 :
                System.out.println("List Cleared\n");
                ull.makeEmpty();
                break;
            default :
                System.out.println("Wrong Entry \n ");
                break;
            }
            /*  Display List  */
            ull.display();

            System.out.println("\nDo you want to continue (Type y or n) \n");
            ch = scan.next().charAt(0);
        } while (ch == 'Y'|| ch == 'y');
    }
}
