# venture-vault

"VentureVault", a dynamic online ecosystem that empowers investors to discover, assess, and engage with startups for informed and successful investment decisions


#include<reg51.h>
#define ldata P1
sbit rs=P0^4;
sbit rw=P0^5;
sbit en=P0^6;
sbit back_lite=P0^7;
void ms_delay(unsigned int);
void lcdcmd(unsigned char);
void lcddata(unsigned char);
void lcdready();

void main(void)
{
unsigned char lcd_command[]={0x38,0x0e,0x01,0x06,0x83};
unsigned char lcd_message[]="Hello";

unsigned char lcd_command1[]={0x38,0x0e,0x06,0xc0,0xc2};
unsigned char lcd_message1[]="CBIT";

unsigned char c,d;
back_lite=0;
for(c=0;c<5;c++)
{
lcdcmd(lcd_command[c]);
}
for(d=0;d<5;d++)
{
lcddata(lcd_message[d]);
ms_delay(30);
}
back_lite=1;

for(c=0;c<5;c++)
{
lcdcmd(lcd_command1[c]);
}
for(d=0;d<4;d++)
{
lcddata(lcd_message1[d]);
ms_delay(30);
}
while(1)
{
}
}
void lcdcmd(unsigned char v)
{
ldata=v;   // put the value on the pins
rs=0;
rw=0;
en=1;
ms_delay(1);
en=0;
return;
}
void lcddata(unsigned char v)
{
ldata=v;   // put the value on the pins
rs=1;
rw=0;
en=1;
ms_delay(1);
en=0;
return;
}
void ms_delay(unsigned int time)
{
unsigned int i,j;
for(i=0;i<time;i++)
{
for(j=0;j<1000;j++);
}
}

#include <reg51.h>

#define sevensegment_data P1
sbit DISP1_se1 = P0^3;
sbit DISP2_se1 = P0^2;
sbit DISP3_se1 = P0^1;
sbit DISP4_se1 = P0^0;
sbit lcd_back_light = P0^7;

void delay_ms(unsigned int);

void main(void) {
    unsigned char count0 = 0, count1 = 0, count2 = 0, count3 = 0, count4 = 0, count5 = 0, count6 = 0;
    unsigned char bcd_code[] = {0x3F, 0x06, 0x05, 0x4f, 0x66, 0x6d, 0x7d, 0x07, 0x7f, 0x6f};

    do {
        do {
            do {
                do {
                    do {
                        DISP1_se1 = 0;
                        sevensegment_data = bcd_code[count1];
                        delay_ms(2);
                        DISP1_se1 = 1;

                        DISP2_se1 = 0;
                        sevensegment_data = bcd_code[count2];
                        delay_ms(2);
                        DISP2_se1 = 1;

                        DISP3_se1 = 0;
                        sevensegment_data = bcd_code[count3];
                        delay_ms(2);
                        DISP3_se1 = 1;

                        DISP4_se1 = 0;
                        sevensegment_data = bcd_code[count4];
                        delay_ms(2);
                        DISP4_se1 = 1;

                        count0 += 1;
                    } while(count0 <= 25);
                    count0 = 0;
                    count1 += 1;
                } while(count1 <= 9);
                count1 = 0;
                count2 += 1;
            } while(count2 <= 9);
            count2 = 0;
            count3 += 1;
        } while(count3 <= 9);
        count3 = 0;
        count4 += 1;
    } while(count4 <= 9);
    count4 = 0;
    while(1);
}

void delay_ms(unsigned int itime) {
    unsigned int i, j;
    for(i = 0; i < itime; i++) {
        for(j = 0; j < 100; j++) {
            ;
        }
    }
}


