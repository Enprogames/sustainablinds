
let timeOfDay, timeOfDayVal;
let monthVal, direction;
let heatGain;
let calculateVal, openCloseBlinds;
let Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sept, Oct, Nov, Dec;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  // Interactive Components
  
  // SET HOUR OF THE DAY
  timeOfDay = createSlider(4, 20, 0, 1).position(10, 50).size(200);
  timeOfDayVal = createInput('').position(timeOfDay.x, timeOfDay.y + 30).size(50);
  timeOfDayVal.value('4');
  timeOfDay.input(function () {
    
    timeOfDayVal.value(timeOfDay.value());
    
    drawSun(timeOfDay.value());
    
  })
  //  TO GET SELECTED MONTH
  monthVal = createSelect().position(timeOfDay.x + 300, timeOfDay.y).size(200);
  monthVal.option('Jan');
  monthVal.option('Feb');
  monthVal.option('Mar');
  monthVal.option('Apr');
  monthVal.option('May');
  monthVal.option('Jun');
  monthVal.option('Jul');
  monthVal.option('Aug');
  monthVal.option('Sept');
  monthVal.option('Oct');
  monthVal.option('Nov');
  monthVal.option('Dec');
  
  // TO GET DIRECTION OF WINDOW
  direction = createSelect().position(monthVal.x + 300, timeOfDay.y).size(200);
  direction.option('North');
  direction.option('East');
  direction.option('South');
  direction.option('West');
  
  // TO CALCULATE HEAT GAIN
  heatGain = createInput(' ').position(width - 300, timeOfDay.y).size(75);
  calculateVal = createButton('Calculate').position(heatGain.x, heatGain.y + 30);
  calculateVal.mousePressed(calculate);
  
  openCloseBlinds = createCheckbox('Blinds Open', true).position(73, height - 80).style('color: white;');
  openCloseBlinds.changed(drawHouse);
  
  // ############################################

  // Function Calls
  drawSun(timeOfDay.value());
  drawHouse();
  
  // ############################################
  
  // DATA
  
    // NORTH
  
  nJan = [0, 0, 0, 0, 0.1, 0.4, 0.8, 0.9, 1, 0.9, 0.8, 0.4, 0.1, 0, 0, 0, 0];
  nFeb = [0, 0, 0, 0, 0.4, 0.7, 1, 1.2, 1.2, 1.2, 1, 0.7, 0.4, 0, 0, 0, 0];
  nMar = [0, 0, 0, 0.4, 0.9, 1.3, 1.5, 1.7, 1.7, 1.7, 1.5, 1.3, 0.9, 0.4, 0, 0, 0];
  nApr = [0, 0, 0.5, 1, 1.4, 1.7, 1.9, 2.1, 2.1, 2.1, 1.9, 1.7, 1.4, 1, 0.5, 0, 0];
  nMay = [0, 1, 2.1, 1.7, 1.8, 2.1, 2.3, 2.5, 2.5, 2.5, 2.3, 2.1, 1.8, 1.7, 2.1, 1, 0];
  nJun = [0.1, 2.3, 3.1, 2.1, 2, 2.2, 2.4, 2.5, 2.6, 2.5, 2.4, 2.2, 2, 2.1, 3.1, 2.3, 0.1];
  nJul = [0, 1.7, 2.7, 2, 2, 2.2, 2.5, 2.6, 2.6, 2.6, 2.5, 2.2, 2, 2, 2.7, 1.7, 0];
  nAug = [0, 0.3, 1.2, 1.3, 1.7, 2, 2.2, 2.4, 2.4, 2.4, 2.2, 2, 1.7, 1.3, 1.2, 0.3, 0];
  nSep = [0, 0, 0.1, 0.6, 1.1, 1.5, 1.7, 1.9, 1.9, 1.9, 1.7, 1.5, 1.1, 0.6, 0.1, 0, 0];
  nOct = [0, 0, 0.1, 0.6, 1, 1.3, 1.5, 1.5, 1.5, 1.3, 1, 0.6, 0.1, 0, 0, 0];
  nNov = [0, 0, 0, 0, 0.1, 0.6, 0.9, 1, 1.1, 1, 0.9, 0.6, 0.1, 0, 0, 0, 0];
  nDec = [0, 0, 0, 0, 0, 0.3, 0.7, 0.8, 0.9, 0.8, 0.7, 0.3, 0, 0, 0, 0, 0];

    // SOUTH

  sJan = [0, 0, 0, 0, 1.3, 8, 13.4, 16.4, 17.3, 16.4, 13.4, 8, 1.3, 0, 0, 0, 0];
  sFeb = [0, 0, 0, 0.3, 4.3, 9.7, 13.4, 15.6, 16.4, 15.6, 13.4, 9.7, 4.3, 0.3, 0, 0, 0];
  sMar = [0, 0, 0, 1.5, 6, 10.6, 14.2, 16.4, 17.1, 16.4, 14.2, 10.6, 6, 1.5, 0, 0, 0];
  sApr = [0, 0, 0.4, 1.5, 4.4, 8.2, 11.3, 13.2, 13.9, 13.2, 11.3, 8.2, 4.4, 1.5 ,0.4, 0, 0];
  sMay = [0, 0.2, 0.8, 1.5, 3.2, 6.3, 9.2, 11.1, 11.7, 11.1, 9.2, 6.3, 3.2, 1.5, 0.8, 0.2, 0];
  sJun = [0, 0.4, 1, 1.6, 2.6, 5, 7.5, 9.3, 9.9, 9.3, 7.5, 5, 2.6, 1.6, 1, 0.4, 0];
  sJul = [0, 0.3, 1, 1.6, 2.9, 5.5, 8.3, 10.1, 10.7, 10.1, 8.3, 5.5, 2.9, 1.6, 1, 0.3, 0];
  sAug = [0, 0.1, 0.6, 1.5, 3.9, 7.3, 10.4, 12.3, 13, 12.3, 10.4, 7.3, 3.9, 1.5, 0.6, 0.1, 0];
  sSep = [0, 0, 0.1, 0.6, 1.1, 1.5, 1.7, 1.9, 1.9, 1.9, 1.7, 1.5, 1.1, 0.6, 0.1, 0, 0];
  sOct = [0, 0, 0, 0.1, 0.6, 1, 1.3, 1.5, 1.5, 1.5, 1.3, 1, 0.6, 0.1, 0, 0, 0];
  sNov = [0, 0, 0, 0, 0.1, 0.6, 0.9, 1, 1.1, 1, 0.9, 0.6, 0.1, 0, 0, 0, 0];
  sDec = [0, 0, 0, 0, 0, 0.3, 0.7, 0.8, 0.9, 0.8, 0.7, 0.3, 0, 0, 0, 0, 0];

    // EAST

  eJan = [0, 0, 0, 0, 1.6, 6.9, 7, 3.7, 1.3, 1, 0.8, 0.4, 0.1, 0, 0, 0, 0];
  eFeb = [0, 0, 0, 0.9, 7, 9.8, 8, 4.1, 1.5, 1.2, 1, 0.7, 0.4, 0, 0, 0, 0];
  eMar = [0, 0, 0.5, 7.2, 13.3, 13.3, 10.1, 5.3, 2.1, 1.7, 1.5, 1.3, 0.9, 0.4, 0, 0, 0];
  eApr = [0, 0.2, 5.5, 12.9, 14.9, 13.6, 10.2, 5.5, 2.5, 2.1, 1.9, 1.7, 1.3, 0.9, 0.3, 0, 0];

  // Rest is just a copy of North
  eMay = [0, 1, 2.1, 1.7, 1.8, 2.1, 2.3, 2.5, 2.5, 2.5, 2.3, 2.1, 1.8, 1.7, 2.1, 1, 0];
  eJun = [0.1, 2.3, 3.1, 2.1, 2, 2.2, 2.4, 2.5, 2.6, 2.5, 2.4, 2.2, 2, 2.1, 3.1, 2.3, 0.1];
  eJul = [0, 1.7, 2.7, 2, 2, 2.2, 2.5, 2.6, 2.6, 2.6, 2.5, 2.2, 2, 2, 2.7, 1.7, 0];
  eAug = [0, 0.3, 1.2, 1.3, 1.7, 2, 2.2, 2.4, 2.4, 2.4, 2.2, 2, 1.7, 1.3, 1.2, 0.3, 0];
  eSep = [0, 0, 0.1, 0.6, 1.1, 1.5, 1.7, 1.9, 1.9, 1.9, 1.7, 1.5, 1.1, 0.6, 0.1, 0, 0];
  eOct = [0, 0, 0.1, 0.6, 1, 1.3, 1.5, 1.5, 1.5, 1.3, 1, 0.6, 0.1, 0, 0, 0];
  eNov = [0, 0, 0, 0, 0.1, 0.6, 0.9, 1, 1.1, 1, 0.9, 0.6, 0.1, 0, 0, 0, 0];
  eDec = [0, 0, 0, 0, 0, 0.3, 0.7, 0.8, 0.9, 0.8, 0.7, 0.3, 0, 0, 0, 0, 0];

    // WEST

  wJan = [0, 0, 0, 0, 0.1, 0.4, 0.8, 0.9, 1, 0.9, 0.8, 0.4, 0.1, 0, 0, 0, 0];
  wFeb = [0, 0, 0, 0, 0.4, 0.7, 1, 1.2, 1.2, 1.2, 1, 0.7, 0.4, 0, 0, 0, 0];
  wMar = [0, 0, 0, 0.4, 0.9, 1.3, 1.5, 1.7, 1.7, 1.7, 1.5, 1.3, 0.9, 0.4, 0, 0, 0];
  wApr = [0, 0, 0.5, 1, 1.4, 1.7, 1.9, 2.1, 2.1, 2.1, 1.9, 1.7, 1.4, 1, 0.5, 0, 0];
  wMay = [0, 1, 2.1, 1.7, 1.8, 2.1, 2.3, 2.5, 2.5, 2.5, 2.3, 2.1, 1.8, 1.7, 2.1, 1, 0];
  wJun = [0.1, 2.3, 3.1, 2.1, 2, 2.2, 2.4, 2.5, 2.6, 2.5, 2.4, 2.2, 2, 2.1, 3.1, 2.3, 0.1];
  wJul = [0, 1.7, 2.7, 2, 2, 2.2, 2.5, 2.6, 2.6, 2.6, 2.5, 2.2, 2, 2, 2.7, 1.7, 0];
  wAug = [0, 0.3, 1.2, 1.3, 1.7, 2, 2.2, 2.4, 2.4, 2.4, 2.2, 2, 1.7, 1.3, 1.2, 0.3, 0];
  wSep = [0, 0, 0.1, 0.6, 1.1, 1.5, 1.7, 1.9, 1.9, 1.9, 1.7, 1.5, 1.1, 0.6, 0.1, 0, 0];
  wOct = [0, 0, 0.1, 0.6, 1, 1.3, 1.5, 1.5, 1.5, 1.3, 1, 0.6, 0.1, 0, 0, 0];
  wNov = [0, 0, 0, 0, 0.1, 0.6, 0.9, 1, 1.1, 1, 0.9, 0.6, 0.1, 0, 0, 0, 0];
  wDec = [0, 0, 0, 0, 0, 0.3, 0.7, 0.8, 0.9, 0.8, 0.7, 0.3, 0, 0, 0, 0, 0];
  
  // ############################################
}


function drawSun(position) {
  
  
  if (position < 6 || position > 17)
  {
    background('DarkBlue');
    drawText('white');
  }
  else if (position == 6 || position == 17)
  {
    background('Blue');
    drawText('black');
  }
  else
  {
    background('DeepSkyBlue');
    drawText('black');
  }
    
  
  
  fill('yellow')
  
  if (position <= 12)
  {
    ellipse(width / 2 + 100, height - (position * 35), 80, 80);
  }
  else
  {
    switch (position)
    {
      case 13:
        position = 11;
        break;
      case 14:
        position = 10;
        break;
      case 15:
        position = 9;
        break;
      case 16:
        position = 8;
        break;
      case 17:
        position = 7;
        break;
      case 18:
        position = 6;
        break;
      case 19:
        position = 5;
        break;
      case 20:
        position = 4;
        break;
    }
    ellipse(width / 2 + 100, height - (position * 35), 80, 80);
  }
  drawHouse();
  
}

function drawHouse ()
{
  // Grass
  fill('green');
  rect(0, height - 50, width, 50);
  
  //House
  fill ('SaddleBrown');
  rect(30, height - 200, 175, 150);
  
  fill ('Crimson');
  triangle(30, height - 200, 117.5, height - 300, 205, height - 200);
  
  fill ('Cyan');
  rect(80, height - 150, 75, 50);
  
  fill('black');
  line (80, height - 125, 155, height - 125);
  line (117.5, height - 100, 117.5, height - 150);
  
  blindsOpenClose();

}

function drawText (color)
{
  fill(color);
  
  textSize(25);

  text('Hour of the day', timeOfDay.x, timeOfDay.y - 5);
  
  text('Month', monthVal.x, monthVal.y - 5);
  
  text('Heat Gain (kWh-m²)', heatGain.x, heatGain.y - 5);
  
  text('Direction of Window', direction.x, direction.y - 5)
  
}

function calculate ()
{
  let reduction = 1;
  
  if (!openCloseBlinds.checked())
  {
    reduction = 0.45;
  }
  
  if (direction.value() == 'South')
  {
    switch(monthVal.value())
    {
      case 'Jan':
        heatGain.value(sJan[timeOfDay.value() - 4] * reduction);
        break;
      case 'Feb':
        heatGain.value(sFeb[timeOfDay.value() - 4] * reduction);
        break;
      case 'Mar':
        heatGain.value(sMar[timeOfDay.value() - 4] * reduction);
        break;
      case 'Apr':
        heatGain.value(sApr[timeOfDay.value() - 4] * reduction);
        break;
      case 'May':
        heatGain.value(sMay[timeOfDay.value() - 4] * reduction);
        break;
      case 'Jun':
        heatGain.value(sJun[timeOfDay.value() - 4] * reduction);
        break;
      case 'Jul':
        heatGain.value(sJul[timeOfDay.value() - 4] * reduction);
        break;
      case 'Aug':
        heatGain.value(sAug[timeOfDay.value() - 4] * reduction);
        break;
      case 'Sept':
        heatGain.value(sSep[timeOfDay.value() - 4] * reduction);
        break;
      case 'Oct':
        heatGain.value(sOct[timeOfDay.value() - 4] * reduction);
        break;
      case 'Nov':
        heatGain.value(sNov[timeOfDay.value() - 4] * reduction);
        break;
      case 'Dec':
        heatGain.value(sDec[timeOfDay.value() - 4] * reduction);
        break;
    }
  }

  else if (direction.value() == 'North')
  {
    switch(monthVal.value())
    {
      case 'Jan':
        heatGain.value(nJan[timeOfDay.value() - 4] * reduction);
        break;
      case 'Feb':
        heatGain.value(nFeb[timeOfDay.value() - 4] * reduction);
        break;
      case 'Mar':
        heatGain.value(nMar[timeOfDay.value() - 4] * reduction);
        break;
      case 'Apr':
        heatGain.value(nApr[timeOfDay.value() - 4] * reduction);
        break;
      case 'May':
        heatGain.value(nMay[timeOfDay.value() - 4] * reduction);
        break;
      case 'Jun':
        heatGain.value(nJun[timeOfDay.value() - 4] * reduction);
        break;
      case 'Jul':
        heatGain.value(nJul[timeOfDay.value() - 4] * reduction);
        break;
      case 'Aug':
        heatGain.value(nAug[timeOfDay.value() - 4] * reduction);
        break;
      case 'Sept':
        heatGain.value(nSep[timeOfDay.value() - 4] * reduction);
        break;
      case 'Oct':
        heatGain.value(nOct[timeOfDay.value() - 4] * reduction);
        break;
      case 'Nov':
        heatGain.value(nNov[timeOfDay.value() - 4] * reduction);
        break;
      case 'Dec':
        heatGain.value(nDec[timeOfDay.value() - 4] * reduction);
        break;
    }
  }
  else if (direction.value() == 'East')
  {
    switch(monthVal.value())
    {
      case 'Jan':
        heatGain.value(eJan[timeOfDay.value() - 4] * reduction);
        break;
      case 'Feb':
        heatGain.value(eFeb[timeOfDay.value() - 4] * reduction);
        break;
      case 'Mar':
        heatGain.value(eMar[timeOfDay.value() - 4] * reduction);
        break;
      case 'Apr':
        heatGain.value(eApr[timeOfDay.value() - 4] * reduction);
        break;
      case 'May':
        heatGain.value(eMay[timeOfDay.value() - 4] * reduction);
        break;
      case 'Jun':
        heatGain.value(eJun[timeOfDay.value() - 4] * reduction);
        break;
      case 'Jul':
        heatGain.value(eJul[timeOfDay.value() - 4] * reduction);
        break;
      case 'Aug':
        heatGain.value(eAug[timeOfDay.value() - 4] * reduction);
        break;
      case 'Sept':
        heatGain.value(eSep[timeOfDay.value() - 4] * reduction);
        break;
      case 'Oct':
        heatGain.value(eOct[timeOfDay.value() - 4] * reduction);
        break;
      case 'Nov':
        heatGain.value(eNov[timeOfDay.value() - 4] * reduction);
        break;
      case 'Dec':
        heatGain.value(eDec[timeOfDay.value() - 4] * reduction);
        break;
    }
  }
  else if (direction.value() == 'West')
  {
    switch(monthVal.value())
    {
      case 'Jan':
        heatGain.value(wJan[timeOfDay.value() - 4] * reduction);
        break;
      case 'Feb':
        heatGain.value(wFeb[timeOfDay.value() - 4] * reduction);
        break;
      case 'Mar':
        heatGain.value(wMar[timeOfDay.value() - 4] * reduction);
        break;
      case 'Apr':
        heatGain.value(wApr[timeOfDay.value() - 4] * reduction);
        break;
      case 'May':
        heatGain.value(wMay[timeOfDay.value() - 4] * reduction);
        break;
      case 'Jun':
        heatGain.value(wJun[timeOfDay.value() - 4] * reduction);
        break;
      case 'Jul':
        heatGain.value(wJul[timeOfDay.value() - 4] * reduction);
        break;
      case 'Aug':
        heatGain.value(wAug[timeOfDay.value() - 4] * reduction);
        break;
      case 'Sept':
        heatGain.value(wSep[timeOfDay.value() - 4] * reduction);
        break;
      case 'Oct':
        heatGain.value(wOct[timeOfDay.value() - 4] * reduction);
        break;
      case 'Nov':
        heatGain.value(wNov[timeOfDay.value() - 4] * reduction);
        break;
      case 'Dec':
        heatGain.value(wDec[timeOfDay.value() - 4] * reduction);
        break;
    }
  }
}

function blindsOpenClose()
{

  if (openCloseBlinds.checked() == false)
  {
    fill ('black');
    rect(80, height - 150, 75, 45);
    
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  drawSun(timeOfDay.value());
  drawHouse();
}



