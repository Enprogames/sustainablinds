let timeOfDay, timeOfDayVal;
let monthVal, direction;
let heatGain;
let calculateVal, openCloseBlinds;
let Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sept, Oct, Nov, Dec;

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Interactive Components

  // SET HOUR OF THE DAY
  timeOfDay = createSlider(4, 20, 0, 1).position(10, 20);
  timeOfDayVal = createInput('').position(timeOfDay.x, timeOfDay.y + 30).size(50);
  timeOfDayVal.value('4');
  timeOfDay.input(function () {

    timeOfDayVal.value(timeOfDay.value());

    drawSun(timeOfDay.value());

  })
  //  TO GET SELECTED MONTH
  monthVal = createSelect().position(200, timeOfDay.y);
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
  direction = createSelect().position(300, timeOfDay.y);
  direction.option('North');
  direction.option('East');
  direction.option('South');
  direction.option('West');

  // TO CALCULATE HEAT GAIN
  heatGain = createInput(' ').position(width - 150, timeOfDay.y).size(75);
  calculateVal = createButton('Calculate').position(heatGain.x, heatGain.y + 30);
  calculateVal.mousePressed(calculate);

  openCloseBlinds = createCheckbox('Blinds Open', true).position(73, height - 80).style('color', 'white');
  openCloseBlinds.changed(drawHouse);




  // ############################################

  // Function Calls
  drawSun(timeOfDay.value());
  drawHouse();

  // ############################################

  // Heat Gain Data
  Jan = [0, 0, 0, 0, 1.3, 8, 13.4, 16.4, 17.3, 16.4, 13.4, 8, 1.3, 0, 0, 0, 0];
  Feb = [0, 0, 0, 0.3, 4.3, 9.7, 13.4, 15.6, 16.4, 15.6, 13.4, 9.7, 4.3, 0.3, 0, 0, 0];
  Mar = [0, 0, 0, 1.5, 6, 10.6, 14.2, 16.4, 17.1, 16.4, 14.2, 10.6, 6, 1.5, 0, 0, 0];
  Apr = [0, 0, 0.4, 1.5, 4.4, 8.2, 11.3, 13.2, 13.9, 13.2, 11.3, 8.2, 4.4, 1.5 ,0.4, 0, 0];
  May = [0, 0.2, 0.8, 1.5, 3.2, 6.3, 9.2, 11.1, 11.7, 11.1, 9.2, 6.3, 3.2, 1.5, 0.8, 0.2, 0];
  Jun = [0, 0.4, 1, 1.6, 2.6, 5, 7.5, 9.3, 9.9, 9.3, 7.5, 5, 2.6, 1.6, 1, 0.4, 0];

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

  text('Hour of the day', timeOfDay.x, timeOfDay.y - 5);

  text('Month', monthVal.x, monthVal.y - 5);

  text('Heat Gain (Kwh-m^2)', heatGain.x, heatGain.y - 5);

  text('Direction of Window', direction.x, direction.y - 5)

}

function calculate ()
{
  let reduction = 1;

  if (!openCloseBlinds.checked())
  {
    reduction = 0.45;
  }

  switch(monthVal.value())
  {
    case 'Jan':
      heatGain.value(Jan[timeOfDay.value() - 4] * reduction);
      break;
    case 'Feb':
      heatGain.value(Feb[timeOfDay.value() - 4] * reduction);
      break;
    case 'Mar':
      heatGain.value(Mar[timeOfDay.value() - 4] * reduction);
      break;
    case 'Apr':
      heatGain.value(Apr[timeOfDay.value() - 4] * reduction);
      break;
    case 'May':
      heatGain.value(May[timeOfDay.value() - 4] * reduction);
      break;
    case 'Jun':
      heatGain.value(Jun[timeOfDay.value() - 4] * reduction);
      break;
    case 'Jul':
      heatGain.value(Jul[timeOfDay.value() - 4] * reduction);
      break;
    case 'Aug':
      heatGain.value(Aug[timeOfDay.value() - 4] * reduction);
      break;
    case 'Sept':
      heatGain.value(Sept[timeOfDay.value() - 4] * reduction);
      break;
    case 'Oct':
      heatGain.value(Oct[timeOfDay.value() - 4] * reduction);
      break;
    case 'Nov':
      heatGain.value(Nov[timeOfDay.value() - 4] * reduction);
      break;
    case 'Dec':
      heatGain.value(Dec[timeOfDay.value() - 4] * reduction);
      break;
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
