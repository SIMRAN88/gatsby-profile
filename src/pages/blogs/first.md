---
path: "/my-first-blog"
date: "2020-09-30"
title: "Setup your Website"
tags: ['gatsby', 'blog']
description: "Setup of your website on oracle free server. "
---


Hello Everyone, Wassup. So finally a comeback. My old site https://www.simranraj.com is no more because I forgot the renewal. Moreover, in between so many things happened a one year long gap all the details are lost.I am such a careless person you see.  😢 So finally,I am back (this time a bit organised and careful) with my new website appearance ta da........yay yay I can hear some claps in the background. 😜  It should keep going. uhmmm uhmmm . 😂 I am super excited to write some blogs for you all technical as well as life related stuffs. 

I know you all have missed me, the same way I missed you. This post is basically related to the setup of a basic website on the free oracle server. 😍 

I will be very happy to share the information with you all which I gathered from internet and from my friends in setting up with this website. I am really thankful for having such techie friends who have helped me if I ever get stuck and obviously internet which saves me at the last moment.Lets begin then after this joyous acknowledgement step by step for the setup of your mark on the WWW.

#Step 1

 You can get a domain of you choice. There are a lot of places which can provide you with free domains as well. But you all know some free items have limitations in disguise.  I purchased my domain from  https://www.gandi.net/en-IN  with a friends referal. If you also want to purchase contact me I too have referral.

#Step 2

 Woaa, so you have your domain now. Setup for your hosting time buddy. So as suggested by one of my senior friend, oracle provides with free server , yup again with some limitations in disguise but free enough to serve your wishes My Lady/Gentleman. So , here you have to register for the oracle cloud (start for free). You must have a cloud account name, username and a password. https://www.oracle.com/in/cloud/free/ 

 ![](https://res.cloudinary.com/dspfh3nrl/image/upload/v1601724691/image.png)

#Step 3

After you have registered you need to create your own instance

![](https://res.cloudinary.com/dspfh3nrl/image/upload/v1601724691/image-1.png)

You can go with the default image

![](https://res.cloudinary.com/dspfh3nrl/image/upload/v1601724691/image-2.png)

Next step is to create ssh keys and then paste it or browse the public key
Hit the create button and wait for the instance to run , once it starts running, you       will get your public IP address in the Instance Access Field. So here you have your own server. Wohooooo......We are gonna need the public IP address to ssh to your machine.

#Step 4

Next step is to setup the WordPress and associated elements. So I went through lot of blogs and got some good content for the WordPress setup.  Found a guys blog who has written a perfect script to let your WordPress run. https://medium.com/analytics-vidhya/host-wordpress-for-free-on-oracle-cloud-a31d079a8cbc  Its an amazing blog for you to understand all the aspect properly. I followed the exact steps but I faced problem with the PHP version mismatch with the WordPress version. So I have found a fix for that as well. Here we go people ............ Open you bash terminal, I use git-bash as I work on windows machine.

1. ssh into your system with --- ssh opc@your_pulic_ip, type yes when interrogated
2. sudo yum -y install https://dl.fedoraproject.org/pub/epel/epel-release-latest-7.noarch.rpm
3. sudo yum -y install https://rpms.remirepo.net/enterprise/remi-release-7.rpm
4. sudo yum-config-manager --enable remi-php74
5. sudo yum install php php-cli php-mysqlnd php-zip php-gd
6. wget https://raw.githubusercontent.com/HughGDA/WordpressOnOracle/master/wordpress_setup.sh
7. chmod +x ./wordpress_setup.sh 
8. ./wordpress_setup.sh

In the end you will be getting information related to your WordPress username, password and database username password. Keep it safe and secure.In the end it will take some time to reboot. After all this your public IP will be up and running.

#Step 5

Here we can see how to map your public IP with your domain name. Inside your dashboard, inside domain go to your dns records section and inside the Type A  under IPv4 Address add your public IP which is up and running and thus the mapping is done. So when you hit the domain you will be redirected to the page you will be publishing.

I will come up with more technical blogs and some utility codes for you guys. Stay tuned. If you have any issues please reach out to me, I will be really happy if I could help.Have a nice day.  😘 