# About

I recently joined a frontend developer course. This simple page allows you to convert any amount in the currency of your choice in the form (euros, pounds, dolars or Swiss francs) to an amount in Polish currency.

## 🌟 Demo 

If you would like to visit this click on the link below:

https://jablonskaaleksandra.github.io/currency-converter/

## 👁 Website preview

![GIF of my app](https://raw.githubusercontent.com/JablonskaAleksandra/currency-converter/main/images/converter.gif)

**Main features**:
- Possibility to convert four selected currencies into Polish currency
- Due to the early stage of learning, it is not possible to convert currencies at the current exchange rate. The NBP exchange rates entered in the code are as of January 13, 2023 and are subject to change in the coming days from latest commit.

&nbsp;
 
### 💡 Technologies
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)


&nbsp;
 
### 🔗 See also

Are you interested in the course of my study ?
Come and see my first project 👉 [ Homepage ](https://jablonskaaleksandra.github.io/homepage/).

&nbsp;
 
### 🤔 Solutions provided in the project

I created this project on the basis of the guidance provided in the materials from the previously mentioned course. In addition, I was inspired by looking at the web sites. 


### 💭 Conclusions for future projects

I would like to improve my JavaScript coding skills. As in the previous project, writing the code, which is intended to convert currencies, turned out to be more difficult than I expected. There are many solutions. I tried to make my code readable and as short as possible. I spent few hours analyzing it, trying to transform it according to the recommendations from the course. This gave me a better understanding of JavaScript and I hope to do the next project with more ease.

### This is the first issue:
```
form.addEventListener("submit", (event) => {
    event.preventDefault();

    const amount = formAmount.value;
    const currency = formValue.value;
    let result = formResult.value;

    switch (currency) {
        case "EUR":
            result = amount * EUR;
            break;
        case "GBP":
            result = amount * GBP;
            break;
        case "USD":
            result = amount * USD;
            break;
        case "CHF":
            result = amount * CHF;
            break;
    };
```

When writing the code that will enable currency conversion, I had a problem with the proper use of the switch statement. After consulting with mentors and the community on the course, I was able to improve the code and achieve the desired result. Later in the course, when the task was to convert the code, I wanted to result to be obtained by use "return", without having to type break. Unfortunately, despite reinforcing the course materials, the code did not work as expected, so I went back to the old solution, reorganizing the code and improving according to the rest of the instructions. I am hopeful that the programming in future projects will prove more effective.


### ✅ Project Status
Project is: complete

The project was completed because I completed all the tasks that were stipulated as part of the homework. 


&nbsp;

### 🙋‍♂️ Feel free to contact me
Write sth nice ;) Find me on:

[Facebook](https://www.facebook.com/profile.php?id=100000886447163) or [Instagram](https://www.instagram.com/_nemeyeth_/) 


&nbsp;

# 👏 Special thanks
Thanks to my Mentros from (https://youcode.pl/) – for providing me with this task and for code review.
