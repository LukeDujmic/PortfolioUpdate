//var navExpanded = false;
//document.body.getElementById("expandNav").addEventListener("mousedown", permaExpand);

function permaExpand()
{
        var expandNav = document.querySelectorAll("#expandNav");
        var cluster = document.querySelectorAll("#cluster");
        var hoverText = document.querySelectorAll("#expandNav > p");
        var homeButton = document.querySelectorAll("#expandNav > div#cluster > a > div#home");
        var homeButtonText = document.querySelectorAll("#expandNav > div#cluster > a > div#home > p");
        var oneButton = document.querySelectorAll("#expandNav > div#cluster > a > div#one");
        var oneButtonP = document.querySelectorAll("#expandNav > div#cluster > a > div#one > p");
        var twoButton = document.querySelectorAll("#expandNav > div#cluster > a > div#two");
        var twoButtonP = document.querySelectorAll("#expandNav > div#cluster > a > div#two > p");
        var threeButton = document.querySelectorAll("#expandNav > div#cluster > a > div#three");
        var threeButtonP = document.querySelectorAll("#expandNav > div#cluster > a > div#three > p");
        var fourButton = document.querySelectorAll("#expandNav > div#cluster > a > div#four");
        var fourButtonP = document.querySelectorAll("#expandNav > div#cluster > a > div#four > p");
        var fiveButton = document.querySelectorAll("#expandNav > div#cluster > a > div#five");
        var fiveButtonP = document.querySelectorAll("#expandNav > div#cluster > a > div#five > p");
        var sixButton = document.querySelectorAll("#expandNav > div#cluster > a > div#six");
        var sixButtonP = document.querySelectorAll("#expandNav > div#cluster > a > div#six > p");

        for (var a = 0; a <= expandNav.length - 1; a++)
        {
                expandNav[a].style = "width: 500px; height: 500px; transition: 1s;";
        }

        for (var b = 0; b <= cluster.length - 1; b++)
        {
                cluster[b].style = "background-color: rgba(255, 255, 255, 0.466); width: 150px; height: 150px;";
        }

        for (var c = 0; c <= hoverText.length - 1; c++)
        {
                hoverText[c].style = "filter: opacity(0);"
        }

        for (var d = 0; d <= homeButton.length - 1; d++)
        {
                homeButton[d].style = "position: absolute; background-color: rgb(0, 0, 0); height: 22px; width: 55px; border-radius: 5px; transition: 0.5s; z-index: 4;"
        }

        for (var e = 0; e <= homeButtonText.length - 1; e++)
        {
                homeButtonText[e].style = "filter: opacity(100%); transition: 1.25s; font-size: 150%; color: white; position: relative; text-align: center;"
        }

        for (var f = 0; f <= oneButton.length - 1; f++)
        {
                oneButton[f].style = "position: absolute; background-color: rgb(27, 0, 0); height: 40px; width: 150px; border-radius: 4px; transition: 1s; transform: translate(25px, -125px);"
        }

        for (var g = 0; g <= oneButton.length - 1; g++)
        {
                oneButtonP[g].style = "margin: auto; position: relative; text-align: center; display: block; transition: 1.25s; filter: opacity(100%); color: rgb(255, 255, 255); font-size: 175%;"
        }

        for (var h = 0; h <= twoButton.length - 1; h++)
        {
                twoButton[h].style = "position: absolute; background-color: rgb(22, 22, 0); height: 40px; width: 150px; border-radius: 4px; transition: 1s; transform: translate(75px, -25px);"
        }

        for (var i = 0; i <= twoButton.length - 1; i++)
        {
                twoButtonP[i].style = "margin: auto; position: relative; text-align: center; display: block; transition: 1.25s; filter: opacity(100%); color:rgb(255, 255, 255); font-size: 175%;"
        }

        for (var j = 0; j <= threeButton.length - 1; j++)
        {
                threeButton[j].style = "position: absolute; background-color: rgb(0, 29, 2); height: 40px; width: 150px; border-radius: 4px; transition: 1s; transform: translate(25px, 75px);"
        }

        for (var k = 0; k <= threeButton.length - 1; k++)
        {
                threeButtonP[k].style = "margin: auto; position: relative; text-align: center; display: block; transition: 1.25s; filter: opacity(100%); color:rgb(255, 255, 255); font-size: 175%;"
        }

        for (var l = 0; l <= fourButton.length - 1; l++)
        {
                fourButton[l].style = "position: absolute; background-color: rgb(0, 23, 39); height: 40px; width: 150px; border-radius: 4px; transition: 1s; transform: translate(-175px, 75px);"
        }

        for (var m = 0; m <= fourButton.length - 1; m++)
        {
                fourButtonP[m].style = "margin: auto; position: relative; text-align: center; display: block; transition: 1.25s; filter: opacity(100%); color: rgb(255, 255, 255); font-size: 175%;"
        }
        
        for (var n = 0; n <= fiveButton.length - 1; n++)
        {
                fiveButton[n].style = "position: absolute; background-color: rgb(5, 0, 46); height: 40px; width: 150px; border-radius: 4px; transition: 1s; transform: translate(-225px, -25px);"
        }

        for (var o = 0; o <= fiveButton.length - 1; o++)
        {
                fiveButtonP[o].style = "margin: auto; position: relative; text-align: center; display: block; transition: 1.25s; filter: opacity(100%); color: rgb(255, 255, 255); font-size: 175%;"
        }

        for (var p = 0; p <= sixButton.length - 1; p++)
        {
                sixButton[p].style = "position: absolute; background-color: rgb(25, 0, 27); height: 40px; width: 150px; border-radius: 4px; transition: 1s; transform: translate(-175px, -125px);"
        }

        for (var q = 0; q <= sixButton.length - 1; q++)
        {
                sixButtonP[q].style = "margin: auto; position: relative; text-align: center; display: block; transition: 1.25s; filter: opacity(100%); color: rgb(255, 255, 255); font-size: 175%;"
        }

        
        console.log("successful");
    
} //background-color: rgba(255, 255, 255, 0.466); height: 250px; width: 250px;


