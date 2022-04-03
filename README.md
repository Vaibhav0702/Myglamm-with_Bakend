# Myglamm-with_FrontEnd

Unit 4 Project At Masai School.

**Links for reference :**

Front-end Repo Link :
https://github.com/Vaibhav0702/Myglamm-with_Frontend.git

Backend Repo Link :
https://github.com/nikeshkumarsingh/Myglamm_with_backend.git

Blog link : 



# Technology We Used:
# In Frontend:
1. HTML
2. CSS
3. JavaScript
4. Bootstrap


# In Backend:
1. Mongo DB
2. AWS
3. Node JS
4. Express JS


**About Website :**

**Landing page**
<!-- 
![Screenshot (51)](https://miro.medium.com/max/3786/1*VWWyKuzBCGh2ipERuP4d_Q.png) -->

**Signup page**

<!-- ![Screenshot (55)](https://drive.google.com/file/d/1pH6OgUvOBPJbQmf7sZPL0GDP7ysrXKH_/view?usp=sharing) -->

**Payment page**

![Screenshot (56)](https://blogger.googleusercontent.com/img/a/AVvXsEiS0s4hKld4oofBxONLSceprbyTCPbZmEB0vcWKz23QP3qOVkp7-nvokWgYuW7lfP9gMrgYYm6IjAzlIRbgkvmL94HBw6CzPtyL-NDYXeIcBplKsr4Yx_Wa5QSylk53JFCGzy622sxADjy3sX670WumLukcfieTfz8kRbUjr3HdxRq1XT16netp9Wit=s1280)


**CheckOut page**

![Screenshot (58)](https://blogger.googleusercontent.com/img/a/AVvXsEgUw4OXMOYXvQv1hj5J03rw8bA3YxzATuZW5jJG1_J5XMwaMtyY9zQdvPSp19RFXZxX4Jmkhv2Vw984QDOaMOPCz_gjmuuerY2-6RZVpuR3AzapNslb4riWbC2CzOKwYQKE0ceApBcDUPo0JXKdwal6t5ciCCiPrOBnAuIwsIJvH1e5Q5Pot_REgkV9=s320)

## Instructions to Run the Code Using AWS
#### Note:

We created cloud database using MongoDb Atlas and deployed on AWS. So, if you want to run our code then please read the instructions below :
- Clone our repository `https://github.com/Vaibhav0702/Myglamm-with_Frontend.git` for frontend code and `https://github.com/nikeshkumarsingh/Myglamm_with_backend.git` for backend code.
- Download Key from `https://drive.google.com/file/d/1XEaB9W-k4zLK44YCk0q6Ai0Kp6aWKEgo/view?usp=sharing`.
- Go to download folder of you computer and open Git Bash here.
- copy paste the link `ssh -i "My-Glamm_Key.pem" ubuntu@ec2-3-88-12-166.compute-1.amazonaws.com` into your Git Bash terminal and press enter key.
- Type yes then press enter key ( if required ).
- Type `cd /var` then press enter key.
- Type `ls` then press enter key.
- Type `cd Myglamm_with_backend` then press enter key.
- Type `sudo npm run server` then press enter key.
- It will show a message that `listening on port 5000`.
- Open the `index.html` on Live server from `https://github.com/Vaibhav0702/Myglamm-with_Frontend.git`.
- Then you can Navigate through other pages from Landing page like `lipstick.html`, `makeup.html`,`haircare.html` etc.



## AWS API'S Instructions 

- you can change the API by modifying url put one from below after http://ec2-3-88-12-166.compute-1.amazonaws.com:5000/

1. products
2. makeups
3. lipsticks
4. sanitizingCare
5. haircare
6. skincares
7. users

EX :
http://ec2-3-88-12-166.compute-1.amazonaws.com:5000/lipsticks

