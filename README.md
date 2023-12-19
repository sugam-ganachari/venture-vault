# venture-vault

"VentureVault", a dynamic online ecosystem that empowers investors to discover, assess, and engage with startups for informed and successful investment decisions//
1.
#include <stdio.h>
#include <string.h>
#define N strlen(gen_poly)
    char data[28];
char check_value[28];
char gen_poly[10];
int data_length, i, j;

void XOR()
{
    for (j = 1; j < N; j++)
        check_value[j] = ((check_value[j] == gen_poly[j]) ? '0' : '1');
}

void receiver()
{
    printf("Enter the received data: ");
    scanf("%s", data);
    printf("\n-----------------------------\n");
    printf("Data received: %s", data);
    crc();
    for (i = 0; (i < N - 1) && (check_value[i] != '1'); i++)
        ;
    if (i < N - 1)
        printf("\nError detected\n\n");
    else
        printf("\nNo error detected\n\n");
}

void crc()
{
    for (i = 0; i < N; i++)
        check_value[i] = data[i];
    do
    {
        if (check_value[0] == '1')
            XOR();
        for (j = 0; j < N - 1; j++)
            check_value[j] = check_value[j + 1];
        check_value[j] = data[i++];
    } while (i <= data_length + N - 1);
}

int main()
{
    printf("\nEnter data to be transmitted: ");
    scanf("%s", data);
    printf("\n Enter the Generating polynomial: ");
    scanf("%s", gen_poly);
    data_length = strlen(data);
    for (i = data_length; i < data_length + N - 1; i++)
        data[i] = '0';
    printf("\n----------------------------------------");
    printf("\n Data padded with n-1 zeros : %s", data);
    printf("\n----------------------------------------");
    crc();
    printf("\nCRC or Check value is : %s", check_value);
    for (i = data_length; i < data_length + N - 1; i++)
        data[i] = check_value[i - data_length];
    printf("\n----------------------------------------");
    printf("\n Final data to be sent : %s", data);
    printf("\n----------------------------------------\n");
    receiver();
    return 0;
}

2.
#include <stdio.h>
#include <conio.h>
#define INFINITY 9999
#define MAX 10

    void
    dijkstra(int G[MAX][MAX], int n, int startnode);

int main()
{
    int G[MAX][MAX], i, j, n, u;
    printf("Enter no. of vertices:");
    scanf("%d", &n);
    printf("\nEnter the adjacency matrix:\n");
    for (i = 0; i < n; i++)
        for (j = 0; j < n; j++)
            scanf("%d", &G[i][j]);
    printf("\nEnter the starting node:");
    scanf("%d", &u);
    dijkstra(G, n, u);
    return 0;
}

void dijkstra(int G[MAX][MAX], int n, int startnode)
{

    int cost[MAX][MAX], distance[MAX], pred[MAX];
    int visited[MAX], count, mindistance, nextnode, i, j;

    for (i = 0; i < n; i++)
        for (j = 0; j < n; j++)
            if (G[i][j] == 0)
                cost[i][j] = INFINITY;
            else
                cost[i][j] = G[i][j];

    for (i = 0; i < n; i++)
    {
        distance[i] = cost[startnode][i];
        pred[i] = startnode;
        visited[i] = 0;
    }
    distance[startnode] = 0;
    visited[startnode] = 1;
    count = 1;
    while (count < n - 1)
    {
        mindistance = INFINITY;

        for (i = 0; i < n; i++)
            if (distance[i] < mindistance && !visited[i])
            {
                mindistance = distance[i];
                nextnode = i;
            }

        visited[nextnode] = 1;
        for (i = 0; i < n; i++)
            if (!visited[i])
                if (mindistance + cost[nextnode][i] < distance[i])
                {
                    distance[i] = mindistance + cost[nextnode][i];
                    pred[i] = nextnode;
                }
        count++;
    }
    for (i = 0; i < n; i++)
        if (i != startnode)
        {
            printf("\nDistance of node%d=%d", i, distance[i]);
            printf("\nPath=%d", i);
            j = i;
            do
            {
                j = pred[j];
                printf("<-%d", j);
            } while (j != startnode);
        }
}

3.
#include <stdio.h>
    struct node
{
    unsigned dist[20];
    unsigned from[20];
} rt[10];
int main()
{
    int costmat[20][20];
    int nodes, i, j, k, count = 0;
    printf("\nEnter the number of nodes : ");
    scanf("%d", &nodes);
    printf("\nEnter the cost matrix :\n");
    for (i = 0; i < nodes; i++)
    {
        for (j = 0; j < nodes; j++)
        {
            scanf("%d", &costmat[i][j]);
            costmat[i][i] = 0;
            rt[i].dist[j] = costmat[i][j];
            rt[i].from[j] = j;
        }
    }
    do
    {
        count = 0;
        for (i = 0; i < nodes; i++)
            for (j = 0; j < nodes; j++)
                for (k = 0; k < nodes; k++)
                    if (rt[i].dist[j] > costmat[i][k] + rt[k].dist[j])
                    {
                        rt[i].dist[j] = rt[i].dist[k] + rt[k].dist[j];
                        rt[i].from[j] = k;
                        count++;
                    }
    } while (count != 0);
    for (i = 0; i < nodes; i++)
    {
        printf("\n\n For router %d\n", i + 1);
        for (j = 0; j < nodes; j++)
        {
            printf("\t\nnode %d via %d Distance %d ", j + 1, rt[i].from[j] + 1, rt[i].dist[j]);
        }
    }
    return 0;
}

4.
#include <stdio.h>
    int
    main()
{
    int no_of_queries, storage, output_pkt_size;
    int input_pkt_size, bucket_size, size_left;
    printf("Enter the total number of times the bucket's content is checked: ");
    scanf("%d", &no_of_queries);
    printf("Enter the total number of packets that can be accommodated in the bucket: ");
    scanf("%d", &bucket_size);
    printf("Enter the number of packets that enter the bucket at a time: ");
    scanf("%d", &input_pkt_size);
    printf("Enter the number of packets that exit the bucket at a time: ");
    scanf("%d", &output_pkt_size);
    storage = 0;
    for (int i = 0; i < no_of_queries; i++)
    {
        size_left = bucket_size - storage;
        if (input_pkt_size <= size_left)
        {
            storage += input_pkt_size;
        }
        else
        {
            printf("Packet loss = %d\n", input_pkt_size);
        }
        printf("Buffer size = %d out of bucket size = %d\n", storage, bucket_size);
        storage -= output_pkt_size;
    }
    return 0;
}

5.
#include <stdio.h>
    int
    main()
{
    int token_bucket_capacity, token_rate, packet_size, num_packets;
    printf("Enter token bucket capacity: ");
    scanf("%d", &token_bucket_capacity);
    printf("Enter token rate (tokens per second): ");
    scanf("%d", &token_rate);
    printf("Enter packet size: ");
    scanf("%d", &packet_size);
    printf("Enter the number of packets to send: ");
    scanf("%d", &num_packets);
    int tokens = 0;
    for (int i = 0; i < num_packets; i++)
    {
        tokens += token_rate;
        if (tokens >= packet_size)
        {
            printf("Sending packet %d (Size: %d bytes)\n", i + 1, packet_size);
            tokens -= packet_size;
        }
        else
        {
            printf("Dropping packet %d (Size: %d bytes)\n", i + 1, packet_size);
        }
    }
    return 0;
}

6.IMPLEMENTATION OF TCP CLIENT AND SERVER PROGRAM

        // A Java program for a Client
        import java.net.*
    ;
import java.io.*;
public
class Client
{
    // initialize socket and input output streams
private
    Socket socket = null;
private
    DataInputStream input = null;
private
    DataOutputStream out = null;
    // constructor to put ip address and port
public
    Client(String address, int port)
    { // establish a connection
        try
        {
            socket = new Socket(address, port);
            System.out.println("Connected");
            // takes input from terminal
            input = new DataInputStream(System.in);
            // sends output to the socket
            out = new DataOutputStream(socket.getOutputStream());
        }
        catch (UnknownHostException u)
        {
            System.out.println(u);
        }
        catch (IOException i)
        {
            System.out.println(i);
        }
        // string to read message from input
        String line = "";
        // keep reading until "Over" is input
        while (!line.equals("Over"))
        {
            try
            {
                line = input.readLine();
                out.writeUTF(line);
            }
            catch (IOException i)
            {
                System.out.println(i);
            }
        }
        // close the connection
        try
        {
            input.close();
            out.close();
            socket.close();
        }
        catch (IOException i)
        {
            System.out.println(i);
        }
    }
public
    static void main(String args[])
    {
        Client client = new Client("127.0.0.1", 5000);
    }
} SERVER PROGRAM
        import java.net.*
    ;
import java.io.*;
public
class Server
{
    // initialize socket and input stream
private
    Socket socket = null;
private
    ServerSocket server = null;
private
    DataInputStream in = null;
    // constructor with port
public
    Server(int port)
    {
        // starts server and waits for a connection
        try
        {
            server = new ServerSocket(port);
            System.out.println("Server started");
            System.out.println("Waiting for a client ...");
            socket = server.accept();
            System.out.println("Client accepted");
            // takes input from the client socket
            in = new DataInputStream(
                new BufferedInputStream(socket.getInputStream()));
            String line = "";
            // reads message from client until "Over" is sent
            while (!line.equals("Over"))
            {
                try
                {
                    line = in.readUTF();
                    System.out.println(line);
                }
                catch (IOException i)
                {
                    System.out.println(i);
                }
            }
            System.out.println("Closing connection");
            // close connection
            socket.close();
            in.close();
        }
        catch (IOException i)
        {
            System.out.println(i);
        }
    }
public
    static void main(String args[])
    {
        Server server = new Server(5000);
    }
}

7.IMPLEMENTATION OF UDP CLIENT AND SERVER
    UDP CLIENT

        import java.io.IOException;
import java.net.DatagramPacket;
import java.net.DatagramSocket;
import java.net.InetAddress;
import java.util.Scanner;
public
class udpBaseClient_2
{
public
    static void main(String args[]) throws IOException
    {
        Scanner sc = new Scanner(System.in);
        // Step 1:Create the socket object for
        // carrying the data.
        DatagramSocket ds = new DatagramSocket();
        InetAddress ip = InetAddress.getLocalHost();
        byte buf[] = null;
        // loop while user not enters "bye"
        while (true)
        {
            String inp = sc.nextLine();
            // convert the String input into the byte array.
            buf = inp.getBytes();
            // Step 2 : Create the datagramPacket for sending
            // the data.
            DatagramPacket DpSend =
                new DatagramPacket(buf, buf.length, ip, 1234);
            // Step 3 : invoke the send call to actually send
            // the data.
            ds.send(DpSend);
            // break the loop if user enters "bye"
            if (inp.equals("bye"))
                break;
        }
    }
} UDP SERVER
    import java.io.IOException;
import java.net.DatagramPacket;
import java.net.DatagramSocket;
import java.net.InetAddress;
import java.net.SocketException;
public
class udpBaseServer_2
{
public
    static void main(String[] args) throws IOException
    {
        // Step 1 : Create a socket to listen at port 1234
        DatagramSocket ds = new DatagramSocket(1234);
        byte[] receive = new byte[65535];
        DatagramPacket DpReceive = null;
        while (true)
        {
            // Step 2 : create a DatgramPacket to receive the data.
            DpReceive = new DatagramPacket(receive, receive.length);
            // Step 3 : revieve the data in byte buffer.
            ds.receive(DpReceive);
            System.out.println("Client:-" + data(receive));
            // Exit the server if the client sends "bye"
            if (data(receive).toString().equals("bye"))
            {
                System.out.println("Client sent bye.....EXITING");
                break;
            }
            // Clear the buffer after every message.
            receive = new byte[65535];
        }
    }
    // A utility method to convert the byte array
    // data into a string representation.
public
    static StringBuilder data(byte[] a)
    {
        if (a == null)
            return null;
        StringBuilder ret = new StringBuilder();
        int i = 0;
        while (a[i] != 0)
        {
            ret.append((char)a[i]);
            i++;
        }
        return ret;
    }
}
