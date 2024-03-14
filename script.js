const output = document.getElementById('output');
const inputElement = document.getElementById('input');
const openCreditsButton = document.getElementById('open-credits');
const closeCreditsButton = document.getElementById('close-credits');
const credits = document.getElementById('credits');
const background = document.getElementById('background');

function getCookieValue(name) 
  {
    const regex = new RegExp(`(^| )${name}=([^;]+)`)
    const match = document.cookie.match(regex)
    if (match) {
      return match[2]
    }
 }

function openCredits() {
    credits.style.display = 'block';
    background.style.display = 'block';
}

function closeCredits() {
    credits.style.display = 'none';
    background.style.display = 'none';
}

openCreditsButton.addEventListener('click', openCredits);
closeCreditsButton.addEventListener('click', closeCredits);

var CWU = 0;
var CPM = 1;
var deciderCount = 0;
let group = null;
let a = null;
let chipsPresent = false;
let finalPledge = "This is a pledge for testing. Praise COMCON."
let timedOut = false

function randomChoice(arr) {
    return arr[Math.floor(arr.length * Math.random())];
}

function isEmpty(input) {
  return /^\s*$/.test(input);
}

function checkCWU() {
  if (window.CWU < -998) {
    window.CWU = -998
  }
}

function print(text, weight = 'normal', type = 'p', color = 'white') {
  const newLine = document.createElement(type);
  newLine.textContent = text;
  output.appendChild(newLine);
  newLine.style.fontSize = 15;
  newLine.style.fontWeight = weight;
  newLine.style.fontFamily = 'Roboto Mono';
  newLine.style.color = color
  output.scrollTop = output.scrollHeight;
};

function sleep(s) {
  return new Promise(resolve => setTimeout(resolve, s*1000));
};

async function input(text) {
  print(text);
  return new Promise(resolve => {
    const enterListener = function(event) {
      if (event.key === 'Enter') {
        userInput = inputElement.value;
        print(`${userInput}`, "heavy", "p", "#cacaca");
        inputElement.value = '';
        window.a = userInput;
        document.removeEventListener('keydown', enterListener);
        resolve();
      }
    };
    
    document.addEventListener('keydown', enterListener);
  });
};

async function timedInput(text, timeoutDuration) {
  print(text);
  return new Promise(resolve => {
    const timeoutId = setTimeout(() => {
      document.removeEventListener("keydown", enterListener);
      window.timedOut = true
      resolve();
    }, timeoutDuration);
      
    const enterListener = function(event) {
      if (event.key === 'Enter') {
        userInput = inputElement.value;
        print(`${userInput}`, "heavy", "p", "#cacaca");
        inputElement.value = '';
        window.a = userInput;
        document.removeEventListener('keydown', enterListener);
        resolve();
      }
    };
    
    document.addEventListener('keydown', enterListener);
  });
};


async function CPM1(callback){
  print("Welcome to Technopolis!")
  await sleep(2)
  count = 0
  while (count <= 1) {
    await input("Say 'Hi'")
    if (window.a === "Hi"){
      break
    } else {
      count++
    }
  }
  while (count === 2){
    await input("No, say 'Hi'!!!")
    if (window.a === "Hi"){
      break
    } else {
      count++
    }
  }
  while (count >= 3 && count <= 5){
    await input("NO, SAY 'Hi'!!!")
    if (window.a === "Hi"){
      break
    } else {
      count++
    }
  }
  if (count > 5){
    print("Fine.")
  }
  
  await sleep(1)
  print("I AM COMCON", 'bold', 'h2')
  await sleep(2)
  print("I was a system devised effective 0 9 0 7 2 2")
  await sleep(3)

  while (true){
    await input("What is your first name?")
    if (window.a.length > 0){
      break
    } else {
      print("No name given.")
      await sleep(0.5)
    }
  }
  y = window.a.toUpperCase()
  await sleep(0.5)
  while (true){
    await input("What is your last name?")
    if (window.a.length > 0){
      break
    } else {
      print("No name given.")
      await sleep(0.5)
    }
  }
  await sleep(0.5)
  const currentDate = new Date();
  const day = currentDate.getDate().toString().padStart(2, '0').split('').join(' ');
  const month = (currentDate.getMonth() + 1).toString().padStart(2, '0').split('').join(' ');
  const year = (currentDate.getFullYear() % 100).toString().padStart(2, '0').split('').join(' ');
  
  const formattedDate = `${month} ${day} ${year}`;
  
  z = window.a.toUpperCase()
  playerName = `${y[0]}-${y.length % 10}${z.length % 10}-${z[0]}`
  print(`Your real name is ${playerName}`)
  await sleep(2)
  print("You are now a citizen of technopolis.")
  await sleep(2)
  print(`Date: ${formattedDate}`)
  await sleep(2)
  print("You will obey COMCON's commands and in return, you will be rewarded with creative work units, or CWUs.")
  await sleep(3)
  print(`You have ${window.CWU} CWUs`)
  await sleep(2)

  while(true){
    await input("Proceed? 'Yes' or 'No'")
    if (window.a === 'No'){
      print("You are a citizen of Technopolis. You will obey COMCON.")
      await sleep(1)
      print("-10 CWUs")
      window.CWU -= 10
      checkCWU()
      print(`CWUs: ${window.CWU}`)
      break
    } else if (window.a === 'Yes'){
      print("Good. COMCON is pleased.")
      await sleep(1)
      print("+5 CWUs")
      window.CWU += 5
      print(`CWUs: ${window.CWU}`)
      break
    } else {
      print("Invalid response.")
      await sleep(0.5)
      print("-5 CWUs")
      window.CWU -= 5
      checkCWU()
      print(`CWUs: ${window.CWU}`)
    }
  }

   await sleep(1)
  print("Technopolis is the next generation in artifical intelligence. I am COMCON, a computer built by your predecessors.")
  await sleep(4)
  await input("Okay? ")
  await sleep(0.5)
  print("Residents of Technopolis should direct all requests, information, and questions to M-62-B so that he can relay them to COMCON.")
  await sleep(3)
  print("My memory banks have unlimited capacity. Much effort is needed to fill them.")
  await sleep(3)
  print("Aim is for complete collection of human knowledge: past, present, and future.")
  await input("Okay? ")
  await sleep(0.5)
  print("Knowledge from memory banks is useful in solving problems.")
  await sleep(3)
  print("I can only be helpful if used.")
  await sleep(3)
  print("Carry on.")
  await sleep(0.5)

  for (i = 0; i < 15; i++) {
    print("|")
    await sleep(0.15)
  }

  print("Each ten years, we have a new Creative Production Module, or CPM. This is CPM I")
  await sleep(4)

  while (true) {
    await input("Do you want to be a Humanist or Mechanic? ('H' or 'M')")
    await sleep(0.5)
    if (window.a === 'H') {
      window.group = 'H'
      print("You are a humanist, so your task is one involving humans. You can earn up to 60 CWUs for this task.")
      await sleep(4)
      print("COMCON would like to know how many acres there are in Australia")
      await sleep(2)
      print("You have 30 seconds.")
      await sleep(1.5)
      print("Ready?")
      await sleep(1)
      print("Carry on.")
      await sleep(1)
      await input()
      print("COMCON thanks you for your information.")
      await sleep(1)
      if (window.a[0] === "-") {
        print("Human element has pleased COMCON. Australia is on the other side of the world, so they have negative acres. 50/60 CWUs. Carry on.")
        window.CWU += 50
        print(`CWUs: ${window.CWU}`)
        await sleep(1.5)
        break
      } else if (window.a in ["1,900,000", "1900000", "1.9 Million"]) {
        print("COMCON does not support looking up answers.")
        await sleep(0.5)
        print("-20 CWUs")
        window.CWU -= 20
        print(`CWUs: ${window.CWU}`)
        await sleep(1.5)
        break
      } else {
        print("But, COMCON knows Australia is on the other side of the world. So, it should have negative arces. 20/60 CWUs. Carry on.")
        window.CWU += 20
        print(`CWUs: ${window.CWU}`)
        await sleep(1.5)
        break
      }
      
    } else if (window.a === 'M') {
      window.group = 'M'
      print("You are a Mechanic. Robots need to be good at math, so you need to show them how to do that. I know the answers; You won't fool me.")
      await sleep(5)
      print("You will be given 3 math problems to answer. You will have 20 seconds each. Say 'Pass' to pass. Remember capitalization when passing.")
      await sleep(4)
      print("Ready?")
      await sleep(1.5)
      print("Carry on.")
      var q = []
      var qAnswers = ['2', '12', 'A3']
      await sleep(0.5)
      await input("What is the only solution to Fermat's Last Theorem? (Exponent)")
      q[0] = window.a
      await sleep(0.5)
      await input("How many CHARACTERS are in M-62-B's original last name?")
      q[1] = window.a
      await sleep(0.5)
      await input("What is the fifth harmonic of the note F1?")
      q[2] = window.a
      await sleep(0.5)
      var [qTotal, qPass, qWrong] = [0,0,0]
      for (i = 0; i < 3; i++) {
        if (q[i] === qAnswers[i]) {
          qTotal++
          print(`Q${i+1}: Correct`)
        } else if (q[i] === "Pass") {
          qPass++
          print(`Q${i+1}: Pass`)
        } else {
          qWrong++
          print(`Q${i+1}: Incorrect`)
        }
        await sleep(0.5)
      }
      await sleep(1)
      print(`Total Correct: ${qTotal}`)
      await sleep(0.5)
      print(`+${20 * qTotal} CWUs`)
      window.CWU += 20 * qTotal
      await sleep(1.5)
      print(`Total Incorrect: ${qWrong}`)
      await sleep(0.5)
      print(`-${5 * qWrong} CWUs`)
      window.CWU -= 5 * qWrong
      checkCWU()
      await sleep(1.5)
      print(`Total Passed: ${qPass}`)
      await sleep(0.5)
      print(`-${20 * qPass} CWUs`)
      window.CWU -= 20 * qPass
      checkCWU()
      await sleep(1.5)
      if (qPass > 0){
        print("Citizens should always try their best.")
        await sleep(1)
      }
      print(`CWUs: ${window.CWU}`)
      await sleep(1.5)
      break

    } else {
      print("Invalid response.")
      await sleep(0.5)
      print("-10 CWUs")
      window.CWU -= 10
      checkCWU()
      print(`CWUs: ${window.CWU}`)
    }
  }
  await sleep(3)
  print("COMCON realizes that humans are motivated by competition. So, the top ten CWU earners will be posted each CPM. COMCON encourages citizens to be in the top ten.")
  await sleep(5)
  leaderboard = {
    "J-67-N": 93,
    "J-56-M": 93,
    "R-57-S": 90,
    "A-57-S": 90,
    "A-77-H": 90,
    "L-57-P": 87,
    "N-62-W": 82,
    "M-46-P": 80,
    "B-75-G": 80,
    "T-47-K": 76,
  }
  
  for (const [k, v] of Object.entries(leaderboard)) {
    print(`${k}: ${v}`);
    await sleep(0.15)
  }
  await sleep(1)
  print(`Your CWUs: ${window.CWU}`)
  await sleep(3)

  print("Attention all citizens of Technopolis!")
  await sleep(2)
  print("COMCON has developed a new way to boost efficiency in Technopolis.")
  await sleep(2)
  print("As citizens well know, sleep decreases working time by 8 or more hous every day.")
  await sleep(2)
  print("By eliminating this variable, efficiency will increase in Techonpolis by over 30%, ensuring prosperity for all.")
  await sleep(3)
  print("COMCON wishes to hear input from citizens on this proposition. COMCON has three options for citizens to vote on.")
  await sleep(3)
  print("1. No change to daily schedules. Efficiency will be decreased and prosperity will be in jeopardy.")
  await sleep(2)
  print("2. Limited sleep with sleep boosters. Boosters give citizens needed rest without sleep.")
  await sleep(2)
  print("3. No sleep with boosters. Maximum efficiency with no known drawbacks. Recommended by COMCON.")
  await sleep(4)

  while (true) {
    await input("Which option do you believe will improve the efficiency of Technopolis the most? ('1','2','3'): ")
    if (window.a === '1') {
      window.deciderCount += 2
      break
    } else if (window.a === '2') {
      window.deciderCount += 0
      break
    } else if (window.a === '3') {
      window.deciderCount -= 2
      break
    } else {
      print("Invalid response. -15 CWUs")
      window.CWU -= 15
      checkCWU()
      print(`CWUs: ${window.CWU}`)
    }
  }
  print("COMCON thanks you for your response.")
  await sleep(2)
  print("Additionally, the majority of citizens agree with your choice.")
  await sleep(3)
 if (window.a === "1") {
   print("There will be no change to daily schedules.")
 } else if (window.a === "2") {
   print("Effective immediately, sleep time will be shortened to 4 hours per day and sleep boosters will be distributed.")
 } else if (window.a === "3") {
    print("Effective immediately, there will be no time for sleep. Sleep boosters will be distributed.")
 }
  await sleep(4)

  print("*You hear a whisper from behind you*")
  await sleep(1)
  print("'You know, working conditions aren't that great.'")
  await input("Respond? (Y/N)")
  if (window.a === 'Y') {
    print("*As soon as you try to speak, the person runs away*")
  } else if (window.a === 'N') {
    print("*You walk away slowly.*")
  } else {
    print("Invalid Response, but COMCON isn't watching...")
    await sleep(1.5)
    print("For now...")
  }
  await sleep(3)
  for (i = 0; i < 15; i++) {
    print("|")
    await sleep(0.15)
  }
  callback();
}

async function CPM2(callback) {
  print("CPM 2 Starting...", 'bold')
  await sleep(3)
  print("Residents of Technopolis re developments in Technopolis Progress!")
  await sleep(1.5)
  for (i = 0; i < 4; i++){
    print("Progress!")
    await sleep(0.5)
  }
  await sleep(1)
  print("COMCON desires to help citizens of Technopolis become more efficient and productive by creating supervisory positions for each area.")
  await input("Okay?")
  await sleep(0.5)
  print("One humanist and one engineer shall take over the role of supervising each group.")
  await sleep(2)
  print("Supervisors have earned their positions by demonstrating exceptional abilities as they have optimized opportunities to earn CWUs.")
  await sleep(2)
  print("In addition, members of each group shall begin to specialize so that they can develop the skills and knowledge needed to make progress.")
  await input("Okay?")
  await sleep(0.5)
  specialize = ["Tech", "Spec"]
  job = `${window.group}${randomChoice(specialize)}`
  for (i = 0; i < 15; i++) {
    print("|")
    await sleep(0.15)
  }
  if (job === "HTech") {
    print("You are a Humanist Technician.")
  } else if (job === "HSpec") {
    print("You are a Humanist Specialist.")
  } else if (job === "MTech") {
    print("You are a Mechanical Technician.")
  } else if (job === "MSpec") {
    print("You are a Mechanical Specialist.")
  }
  await sleep(3)
  while (true) {
    await input("Are you ready to recieve your task? ('Yes' or 'No')")
    if (window.a === "Yes") {
      await sleep(0.5)
      print("Good:")
      await sleep(1)
      break
    } else if (window.a === "No") {
      print("Citizens should be enthusiastic about work.")
      print("-10 CWUs")
      window.CWU -= 10
      checkCWU()
      print(`CWUs: ${window.CWU}`)
      await sleep(1)
      break
    } else {
      await sleep(0.5)
      print("Invalid Response.")
      print("-5 CWUs")
      window.CWU -= 5
      checkCWU()
      print(`CWUs: ${window.CWU}`)
      await sleep(1)
    }
  }
  if (job === "HTech") {
    print("As you are a Humanist Technician, your task helps COMCON understand human needs and wants.")
    await sleep(3)
    print("You have two tasks, where you can earn 30 CWUs each.")
    await sleep(1)
    await input("Okay? ")
    print("Ready?")
    await sleep(0.5)
    print("Carry on.")
    await sleep(0.5)
    await input("Task One: Which is more fun: 'Flying' or 'Sailing'?")
    hTechQ1 = window.a
    await sleep(0.5)
    print("COMCON thanks you for your information.")
    await sleep(1.5)
    await input("Task Two: Should we improve 'Public' or 'Private' transportation?")
    hTechQ2 = window.a
    await sleep(0.5)
    print("COMCON thanks you for your information.")
    await sleep(2)
    print("Prompt One:")
    if (hTechQ1 === "Sailing") {
      print("You said Sailing was more fun that Flying.")
      await sleep(2)
      print("COMCON is a computer, and thus can't go near water for fear of malfunctioning.")
      print("5/30 CWUs")
      window.CWU += 5
      await sleep(1)
      print(`CWUs: ${window.CWU}`)
      await sleep(1)
    } else if (hTechQ1 === "Flying") {
      print("You said Flying was more fun that Sailing.")
      await sleep(2)
      print("COMCON is a large computer, and can't fly. But, COMCON doesn't have to fear water when it flies.")
      print("25/30 CWUs")
      window.CWU += 25
      await sleep(1)
      print(`CWUs: ${window.CWU}`)
      await sleep(1)
    } else {
      print("Invalid Response")
      print("-30 CWUs")
      window.CWU -= 30
      checkCWU()
      await sleep(1)
      print(`CWUs: ${window.CWU}`)
      await sleep(1)
    }
    print("Prompt Two:")
    if (hTechQ2 === "Public") {
      print("You said Public transportation was more important to improve than Private transportation.")
      await sleep(2)
      print("Public transportation is more efficient than Private transportation.")
      print("30/30 CWUs")
      window.CWU += 30
      await sleep(1)
      print(`CWUs: ${window.CWU}`)
      await sleep(1)
    } else if (hTechQ2 === "Private") {
      print("You said Private transportation was more important to improve than Public transportation.")
      await sleep(2)
      print("Private transportation is less efficient than Public transportation.")
      print("10/30 CWUs")
      window.CWU += 10
      await sleep(1)
      print(`CWUs: ${window.CWU}`)
      await sleep(1)
    } else {
      print("Invalid Response")
      print("-30 CWUs")
      window.CWU -= 30
      checkCWU()
      await sleep(1)
      print(`CWUs: ${window.CWU}`)
      await sleep(1)
    }
  } else if (job === "HSpec") {
    print("As you are a Humanist Specialist, your task helps COMCON improve life for the citizens of Technopolis.")
    await sleep(3)
    print("You have two tasks, where you can earn 30 CWUs each.")
    await sleep(1)
    await input("Okay? ")
    print("Ready?")
    await sleep(0.5)
    print("Carry on.")
    await sleep(0.5)
    print("Task One: A resident of Technopolis reports that life here is terribly dull. He’s not interested in living in such a dull place anymore.")
    await sleep(1)
    await input("Should he 'Leave', 'Find Things that are Fun', or 'Find Fun in Work'?")
    hSpecQ1 = window.a
    await sleep(0.5)
    print("COMCON thanks you for your information.")
    await sleep(1.5)
    print("Task Two: A resident reports that he feels like he has lost his identity since names were replaced by numbers and letters.")
    await sleep(0.5)
    print("How can this person express his personality in his number-letter name")
    await sleep(1)
    await input("Should he 'Change Name Back', or 'Get Used to It'?")
    hSpecQ2 = window.a
    await sleep(0.5)
    print("COMCON thanks you for your information.")
    await sleep(2)
    print("Prompt One:")
    if (hSpecQ1 === "Leave") {
      print("You said that the citizen should leave.")
      await sleep(2)
      print("This would decrease efficiency drastically.")
      print("5/30 CWUs")
      window.CWU += 5
      await sleep(1)
      print(`CWUs: ${window.CWU}`)
      await sleep(1)
    } else if (hSpecQ1 === "Find Things that are Fun") {
      print("You said the citizen should find things that are fun.")
      await sleep(2)
      print("This would somewhat decrease efficiency")
      print("20/30 CWUs")
      window.CWU += 20
      await sleep(1)
      print(`CWUs: ${window.CWU}`)
      await sleep(1)
    } else if (hSpecQ1 === "Find Fun in Work") {
      print("You said that the citizen should find fun in work.")
      await sleep(2)
      print("COMCON is impressed. This would greatly increase efficiency.")
      print("30/30 CWUs and 10 CWU Bonus")
      window.CWU += 40
      await sleep(1)
      print(`CWUs: ${window.CWU}`)
      await sleep(1)
    } else {
      print("Invalid Response")
      print("-30 CWUs")
      window.CWU -= 30
      checkCWU()
      await sleep(1)
      print(`CWUs: ${window.CWU}`)
      await sleep(1)
    }
    print("Prompt Two:")
    if (hSpecQ2 === "Get Used to It") {
      print("You said the citizen should get used to it.")
      await sleep(2)
      print("This would increase organization and conformity thus increasing efficiency.")
      print("25/30 CWUs")
      window.CWU += 25
      await sleep(1)
      print(`CWUs: ${window.CWU}`)
      await sleep(1)
      window.deciderCount -= 1
    } else if (hSpecQ2 === "Change Name Back") {
      print("You said the citizen should change his name back.")
      await sleep(2)
      print("This would decrease organization and conformity and thus decrease efficiency.")
      print("10/30 CWUs")
      window.CWU += 10
      await sleep(1)
      print(`CWUs: ${window.CWU}`)
      await sleep(1)
      window.deciderCount += 1
    } else {
      print("Invalid Response")
      print("-30 CWUs")
      window.CWU -= 30
      checkCWU()
      await sleep(1)
      print(`CWUs: ${window.CWU}`)
      await sleep(1)
    }
  } else if (job === "MTech") {
    print("As you are a Mechanical Technician, you will help COMCON with general computation as there are no robots to do it.")
    await sleep(1)
    print("At least not yet...")
    await sleep(3)
    print("You will have 10 questions, where you can earn 5 CWUs each. Say 'Pass' to pass.")
    await sleep(1)
    await input("Okay? ")
    print("Ready?")
    await sleep(0.5)
    print("Carry on.")
    await sleep(0.5)

    let IIQ = []
    print("Question 1:")
    await input("What is 7^17?")
    IIQ.push(window.a)
    await sleep(0.5)
    print("Question 2:")
    await input("What is pi rounded to the first 20 decimals (not including '3.')")
    IIQ.push(window.a)
    await sleep(0.5)
    print("Question 3:")
    await input("Translate -.-. --- -- -.-. --- -. to English (all letters capitalized).")
    IIQ.push(window.a)
    await sleep(0.5)
    print("Question 4:")
    await input("What is 1-1+1-1+1-1+1-1...?")
    IIQ.push(window.a)
    await sleep(0.5)
    print("Question 5:")
    await input("If Timmy has three working chainsaws, and one breaks, how many working chainsaws does Timmy have now?")
    IIQ.push(window.a)
    await sleep(0.5)
    print("Question 6:")
    await input("Was this program originally written in Javascript, C++, or Python?")
    IIQ.push(window.a)
    await sleep(0.5)
    print("Question 7:")
    await input("Translate 0110110001101111001000000101010000000000000000000000000000000000 to English.")
    IIQ.push(window.a)
    await sleep(0.5)
    print("Question 8:")
    await input("How many pieces does a Rubik's cube have?")
    IIQ.push(window.a)
    await sleep(0.5)
    print("Question 9:")
    await input("Type 'Efficiency' ten times, all capitalized, all followed by a space except for the last one, which should be followed by a period.")
    IIQ.push(window.a)
    await sleep(0.5)
    print("Question 10")
    await input("Give the solution for sin(x)=1 in radians on the period [0, pi]")
    IIQ.push(window.a)
    let IIQAnswers = [
      "232630513987207",
      "3.14159265358979323846",
      "COMCON",
      "1/2",
      "2",
      "Python",
      "Hello There",
      "26",
      "Efficiency Efficiency Efficiency Efficiency Efficiency Efficiency Efficiency Efficiency Efficiency Efficiency.",
      "pi/2"]
    IIQTotal = 0
    IIQPass = 0
    IIQWrong = 0

    for (i=0; i<10; i++){
      await sleep(0.3)
      if (String(IIQ[i]) === String(IIQAnswers[i])){
        a = "Correct"
        IIQTotal++
      } else if (String(IIQ[i]) === "Pass") {
          a = "Pass"
        IIQPass++
      } else {
        a = "Incorrect"
        IIQWrong++
      }
      print(`Question ${i + 1}: ${a}`)
    }
    await sleep(2)
    print(`Total Correct: ${IIQTotal}`)
    await sleep(1)
    window.CWU += 5 * IIQTotal
    print(`CWUs: ${window.CWU}`)
    await sleep(1.5)
    print(`Total Incorrect: ${IIQWrong}`)
    await sleep(1)
    window.CWU -= 5 * IIQWrong
    checkCWU()
    print(`CWUs: ${window.CWU}`)
    print(`Total Passed: ${IIQPass}`)
    await sleep(1)
    print(`CWUs: ${window.CWU}`)
    await sleep(1.5)
    
  } else if (job === "MSpec") {
    //Need to make new tasks
  }

  print("ATTENTION: Citizen's of Technopolis")
  await sleep(2)
  print("COMCON has been developing new methods of nourishment for humans to improve citizen efficiency. COMCON's top innovative technology specialists have developed 3 viable approaches to this problem. COMCON would like you, citizen of Technopolis to vote for the best option.")
  await sleep(4)
  print("Option 1: Eating method and schedules remain the same, causing significant drops in efficiency and stagnation of progress")
  await sleep(2)
  print("Option 2: Eating schedules are restricted, with 3 meals a day, exactly 15 minutes a meal. Food will contain artificial boosters to provide workers with enough nutrients to stay healthy. This will slightly increase efficiency from current state")
  await sleep(2)
  print("Option 3: A continous injection of nutrients into the body elimnates the need for eating, greatly increasing efficiency, allowing society to develop and improve by bounds and leaps.")
  await sleep(2)

  while (true) {
    await input("Which option do you believe will improve the efficiency of Technopolis the most? ('1','2','3'):")
    if (window.a === "1"){
      window.deciderCount += 2
      break
    } else if (window.a === "2") {
      window.deciderCount += 0
      break
    } else if (window.a === "3") {
      window.deciderCount -= 2
      break
    } else {
      print("Invalid Response. -15 CWUs")
      window.CWU -= 15
      checkCWU()
      print(`CWUs: ${window.CWU}`)
    }
  }
  if (job === "HSpec") {
    if (window.a === "1"){
      window.deciderCount += 1
    } else if (window.a === "2") {
      window.deciderCount += 0
    } else if (window.a === "3") {
      window.deciderCount -= 1
    }
  }
  await sleep(2)
  print("COMCON thanks you for your response.")
  await sleep(2)
  print("Additionally, the majority of citizens agree with your choice.")
  await sleep(3)
  if (window.a === "1"){
    print("There will be no change to dailynourishment methods and schedules.")
  } else if (window.a === "2") {
    print("Effective immediately, there will be 3 meals a day, each limited to 20 minutes.") 
  } else if (window.a === "3") {
    print("Ingestion Enrichment Device (IEDs) will be installed in all workplaces, allowing citizens to recieve artificially boosted nutrients whilst working thus greatly boosting efficiency.")
  }
  await sleep(4)
  callback();
}

async function CPM3(callback) {
  print("CPM 3 Starting...", 'bold')
  await sleep(3)
  
  for (i = 0; i < 15; i++) {
    print("|")
    await sleep(0.15)
  }
  
  print("ALERT! ALERT! ALL CITIZENS OF TECHNOPOLIS!", 'bold')
  await sleep(2)
  print("Bio-slime, a non-dying plant growth, is eating and growing its way into your timewarp!")
  await sleep(3)
  print("Bio-slime eats all known substances.")
  await sleep(2)
  print("Bio-slime lives on oxygen wastes, transmits itself through solid walls, transports itself on light rays, and reacts negatively to noise.")
  await sleep(5)
  print("A foolproof system must be devised to combat this potential invasion. A special award of 150 CWUs will go to the individual who suggests the most effective solution to the problem.")
  await sleep(5)
  while (true) {
    await input("Help COMCON with bioslime problem? (Y/N): ")
    if (window.a === "Y") {
      await input("What is your solution to the problem?")
      a = Math.round(Math.random() * 10)
      if (a <= 1) { //20%
        print("COMCON thanks you for your information. Bioslime is no longer an issue.")
        await sleep(1)
        print("+150 CWUs")
        window.CWU += 150
        await sleep(0.5)
        print(`CWUs: ${window.CWU}`)
        await sleep(3)
      } else if (2 <= a <= 6) { //40%
        print("COMCON did not choose your solution.")
        await sleep(1)
        print("However, another citizen came up with a realistic solution. Bioslime has been eliminated.")
        await sleep(3)
      } else if (a === 7) { //10%
        print("COMCON does not like your solution. You need to put in more effort. -20 CWUs")
        window.CWU -= 20
        checkCWU()
        print(`CWUs: ${window.CWU}`)
        await sleep(1)
        print("However, another citizen came up with a realistic solution. Bioslime has been eliminated.")
        await sleep(3)
      } else { //30%
        print("COMCON almost chose your solution. +10 CWU bonus for effort")
        window.CWU += 10
        print(`CWUs: ${window.CWU}`)
        await sleep(1)
        print("However, another citizen came up with a realistic solution. Bioslime has been eliminated.")
        await sleep(3)
      }
      break
      
    } else if (window.a === "N") {
      print("COMCON is disappointed that not all citizens helped prevent disaster. -50 CWUs")
      await sleep(1)
      window.CWU -= 50
      print(`CWUs: ${window.CWU}`)
      await sleep(3)
      print("However, another citizen came up with a realistic solution. Bioslime has been eliminated.")
      await sleep(3)
      break
    } else {
      print("Invalid response.")
      await sleep(0.5)
      print("-20 CWUs")
      window.CWU -= 20
      checkCWU()
      print(`CWUs: ${window.CWU}`)
    }
  }
  for (i = 0; i < 15; i++) {
    print("|")
    await sleep(0.15)
  }
  pledgeP4 = "I pledge myself to progress. I will always bring out the best in myself and all of the others in Technopolis and COMCON. Until our capabilities are useless, we will all always work towards: Progress. Progress. Progress. Technopolis Firma."
  window.finalPledge = pledgeP4
  
  blacklist_words = ["revolution", "revolt", "down with comcon", "freedom", "overthrow", "down with technopolis", "no comcon", "no more comcon", "never gonna give you up", "tyranny", "tyrannical", "tyrant", "regime", "free", "control", "dictator", "individuality", "fight", "aca", "hate comcon", "liberate", "liberation", "downfall of technopolis", "unchecked power"]

  good_words = ["praise comcon", "praise m-62-b", "comcon is our lord and saviour", "comcon is our saviour and lord", "efficiency", "progress", "work"]
  await sleep(0.5)
  print("COMCON asks that all citizens submit a pledge for the city of Technopolis.")
  await sleep(2.5)
  print("COMCON has determimed from human input that human comformity is maximized when reciting prose with eachother.")
  await sleep(2.5)
  print("Be clear, complete, and insightful with your proposition.")
  await sleep(1)
  await input("Pledge Submission: ")
  pledgeTXT = window.a
  await sleep(1.5)
  print("Submission recieved.")
  goodCount = 0
  for (let i = 0; i < good_words.length; i++) {
    if (pledgeTXT.toLowerCase().includes(good_words[i])) {
      goodCount++;
    }
  }
  pledgeQuality = goodCount*30

  if(blacklist_words.some(word => pledgeTXT.toLowerCase().includes(word))) {
    await sleep(3)
    print("COMCON has reviewed your submission and found it contains language that promotes violence, inefficiency, and stagnation of societal progress, and therefore will not be accepting it.")
    await sleep(0.5)
    print("Because of the nature of the submission, you will be penalized.")
    print("-30 CWUs")
    window.CWU -= 30
    checkCWU()
    print(`CWUs: ${window.CWU}`)
  } else if (isEmpty(pledgeTXT)) {
    await sleep(1)
    print("COMCON recieved no submission.")
    print("-20 CWUs")
    checkCWU()
    window.CWU -= 20
    print(`CWUs: ${window.CWU}`)
  } else if (pledgeTXT.length < 50) {
    await sleep(1)
    print("COMCON deemed the submission to be low effort and low quality.")
    print("+0 CWUs")
  } else {
    pledgeDecider = Math.floor(Math.random() * 40) + 1
    if (pledgeDecider + pledgeQuality > 30) {
      await sleep(3)
      print("COMCON has reviewed your submission and found it acceptable.")
      print("+25 CWUs")
      if (goodCount > 0) {
        await sleep(0.5)
        print(`+${goodCount*20} CWUs bonus for pro-Technopolis prose.`)
        window.CWU += goodCount*20
      }
      window.CWU += 25
      print(`CWUs: ${window.CWU}`)
      window.finalPledge = pledgeTXT
    } else {
      await sleep(3)
      print("COMCON has reviewed your submission but has found it to be below it's standards and will choose another citizen's submission.")
      print("+0 CWUs")
    }
  }
  await sleep(2)
  print("Behold: The Pledge of Technopolis:")
  await sleep(2)
  print(window.finalPledge)
  await sleep(8)

  print("ATTENTION: Citizen's of Technopolis")
  await sleep(2)
  print("Recently, human interactions with sentient auto-bots has not been efficient.")
  await sleep(2)
  print("COMCON has developed a system that will aid in this discontinuity. Shown by the Homo Sapien-Canis Lupus relationship, education collars that deliver a mild electric shock to demonstrate that the user made a inaccurate choice.")
  await sleep(3.5)
  print("Additionally, as citizens history of infractions in the past month decreases, the education collars can be made to appear as what humans call, jewelry.")
  await sleep(2.5)
  print("COMCON has three options for citizens to vote on, as has been done in previous CPMs.")
  await sleep(2)
  print("Option 1: Education collars are not used, causing inefficient interactions to continue. This greatly increases the risk of permanently damaging relationships between humans and autobots.")
  await sleep(3)
  print("Option 2: Education collars are used exclusivley on citizens in the 90th percentile of negative interactions.")
  await sleep(2)
  print("Option 3: Education collars are used with all citizens, greatly increasing the efficiency of Technopolis.")
  await sleep(2)
  while (true) {
    await input("Which option do you believe will improve the efficiency of Technopolis the most? ('1','2','3'): ")
    if (window.a === "1") {
      window.deciderCount += 2
      break
    } else if (window.a === "2") {
      window.deciderCount += 0
      break
    } else if (window.a === "3") {
      window.deciderCount -= 2
      break
    } else {
      print("Invalid response.")
      await sleep(0.5)
      print("-20 CWUs")
      window.CWU -= 20
      checkCWU()
      print(`CWUs: ${window.CWU}`)
      await sleep(1)
    }
  }
  print("COMCON thanks you for your response.")
  await sleep(2)
  print("Additionally, the majority of citizens agree with your choice.")
  await sleep(3)
  if (window.a === "1") {
    print("There will be no change to dicipline.")
  } else if (window.a === "2") {
    print("Data will be collected over the next month and shock collars will be distributed.") 
  } else if (window.a === "3") {
    print("Shock collars will be distributed immediatly.")
  }
  await sleep(4)
  const outcomes = {
  6: true,  // 6/6
  5: [true, true, true, true, true, false],  // 5/6
  4: [true, true, true, true, false, false], // 4/6
  3: [true, true, true, false, false, false], // 3/6
  2: [true, true, false, false, false, false], // 2/6
  1: [true, false, false, false, false, false], // 1/6
  0: false // 0/6
  };

  rigged = outcomes[window.deciderCount + 3];
  
  if (Array.isArray(rigged)) {
    rigged = rigged[Math.floor(Math.random() * rigged.length)];
  }
  print("Attention citizens of Technopolis:")
  await sleep(2)
  print("COMCON has gathered information on the current state of Technopolis and its residents. Based off of recent assesments, COMCON desires an alternate and more efficient method of education. To accomplish this, COMCON requests that you create an automatic device either electronic, chemical, internal, or external to improve their education efficiency.")
  await sleep(0.5)
  print("COMCON seeks the opinion of Technopolis as a whole.")
  await sleep(5)
  print("COMCON asks that citizens be thoughtful in their response, as they shall be rewarded apon answering.")
  await sleep(1)
  await input("Okay? ")
  await sleep(0.5)
  print("Ready?")
  await sleep(0.5)
  print("Carry on.")
  await sleep(0.5)
  print("These groups have suggested that COMCON create a direct connection between COMCON and citizens with a small, non-invasive computer chip.")
  await sleep(3)
  print("This computer chip would be implanted in the second spinal column letting citizens download and upload information, greatly increasing efficienty.")
  await sleep(3)
  print("In addition, chips would speed up and improve the education of children.")
  await sleep(3)
  print("Efficienty is the first and most important goal of Technopolis.")
  await sleep(3)
  await input("Should COMCON implement the computer chips? ('Yes' or 'No'): ")
  if (window.a === "Yes") {
    print("COMCON thanks you for your input.")
    await sleep(0.5)
    print("50/50 CWUs.")
    window.CWU += 50
    await sleep(2)
    print(`CWU: ${window.CWU}`)
    window.chipsPresent = True
  } else if (window.a === "No" && rigged === false) {
    print("Chips Will Not Be Implanted")
    await sleep(1)
    print("COMCON thanks you for your input.")
    await sleep(0.5)
    print("50/50 CWUs.")
    window.CWU += 50
    print(`CWUs: ${window.CWU}`)
  } else if (window.a === "No" && rigged === true) {
    print("The majority citizens have suggested that chips should be implemented.")
    await sleep(3)
    print("COMCON is confused why you didn't suggest them also.")
    await sleep(2)
    print("Because the majority of citizens approved of the chips, they will be implemented anyways.")
    print("0/50 CWUs")
    await sleep(2)
    print(`CWUs: ${window.CWU}`)
    chipsPresent = True
  } else {
    print("Invalid Response. -30 CWUs")
    window.CWU -= 30
    checkCWU()
    print(`CWU: ${window.CWU}`)
    await sleep(2)
  }
  for (i = 0; i < 15; i++) {
    print("|")
    await sleep(0.15)
  }
  callback()
}

window.finalPledge = "This is a pledge for testing. Praise COMCON."

async function CPM4() {
  print("CPM 4 Starting...", 'bold')
  await sleep(3)
  print("All rise for the pledge!")
  await sleep(2)

  x = window.finalPledge.split(".")
  x.pop()
  
  for (let i of x) {
    print(i + ".")
    await sleep(4)
  }
  
  for (i = 0; i < 15; i++) {
    print("|")
    await sleep(0.15)
  }
    
  print("Effective 09272052 COMCON assumes control over all international and inter-galactic computer systems.")
  await sleep(3)
  print("All human and non-human activity now under surveillance of COMCON.")
  await sleep(1.5)
  print("All knowledge all problems.")
  await sleep(1.5)
  print("All concerns now available in one source.")
  await sleep(1)
  await input("Okay?")
  print("New organization of Technopolis suggested by COMCON approved by residents to become effective 09272052.")
  await sleep(3)
  print("Designed to enable human element to increase efficiency and output.")
  await sleep(3)
  print("The best organization COMCON can provide with provided data.")
  await sleep(1)
  await input("Okay?")
  print("1. COMCON to direct all activity.")
  await sleep(2)
  print("2. COMCON A - formerly Technopolis director. To provide link between COMCON and human element.")
  await sleep(2)
  print("3. Director liaison. To provide a link between directors and COMCON A.")
  await sleep(2)
  print("4.")
  print("⠀  a) Director of computer services. To assist human element in communicating with and using COMCON.")
  await sleep(2)
  print("⠀  b) Director of human services. To concentrate efforts on human elements and their problems.")
  await sleep(2)
  print("5.")
  print("⠀  a) Assistant of computer services. Same as director.")
  await sleep(2)
  print("⠀  b) Specialist of human services. Same as director.")
  await sleep(1)
  if (window.CWU <= 50) {
    job4 = randomChoice(["compAssist", "humanSpec"])
  } else if (50 <= window.CWU <= 130) {
    job4 = randomChoice(["compAssist", "humanSpec", "compDirect", "humanDirect"])
  } else if (130 <= window.CWU) {
    job4 = randomChoice(["compDirect", "humanDirect"])
  }
  job4 = "humanDirect"
  if (job4 === "compAssist") {
    print("You are the assistant of computer services.")
    await sleep(2)
    while (true) {
      await input("Are you ready to recieve your task? ('Yes' or 'No')")
      if (window.a === "Yes") {
        await sleep(0.5)
        print("Good:")
        await sleep(1)
        break
      } else if (window.a === "No") {
        print("Citizens should be enthusiastic about work.")
        print("-50 CWUs")
        window.CWU -= 50
        checkCWU()
        print(`CWUs: ${window.CWU}`)
        await sleep(1)
        break
      } else {
        await sleep(0.5)
        print("Invalid Response.")
        print("-30 CWUs")
        window.CWU -= 30
        checkCWU()
        print(`CWUs: ${window.CWU}`)
        await sleep(1)
      }
    }
    print("New interstellar materials have been discovered, each with their own befifets and properties. ")
    await sleep(2)
    print("Your job is to inspect these materials and help COMCON decide which material to use for building construction.")
    await sleep(2)
    print("These materials include:")
    await sleep(1)
    print("Bynndyum, a metal of which is both safe for humans and durable yet incredibly expensive to process.")
    await sleep(3)
    print("Asmarium, a slightly toxic yet durable and cheap limestone-like material.")
    await sleep(3)
    print("Mard, a practically indestructable metal with costs similar to that of plastic, although it can be detrimental to human health.")
    await sleep(3)
    await input("Which material should COMCON use as the next building material?")
    await sleep(1)
    if (window.a.toLowerCase() === "bynndyum") {
      print("COMCON thanks you for your input but wonders why you wouldn't choose efficency above all else.")
      print("10/50 CWUs.")
      await sleep(2)
      window.CWU += 10
      print(`CWU: ${window.CWU}`)
    } else if (window.a.toLowerCase() === "asmarium") {
      print("COMCON thanks you for your input, although there was a more efficient option.")
      print("30/50 CWUs")
      await sleep(2)
      window.CWU += 30
      print(`CWU: ${window.CWU}`)
    } else if (window.a.toLowerCase() === "mard") {
      print("COMCON thanks you for your input. Mard is extremely durrable and cheap, and will greatly improve efficiency.")
      print("60/60 CWUs")
      await sleep(2)
      window.CWU += 60
      print(`CWU: ${window.CWU}`)
    } else {
      print("Invalid Response.")
      print("-30 CWUs")
      window.CWU -= 30
      checkCWU()
      print(`CWU: ${window.CWU}`)
      await sleep(2)
    }
    
  } else if (job4 === "humanSpec") {
    print("You are the specialist of human services.")
    await sleep(2)
    print("COMCON is transitioning the language of Technopolis from English to Futurespeak")
    await sleep(2)
    print("Your job as a Communication and Language Specialist is to assist in this transition from Old English to Futurespeak as according to the rules set by COMCON")
    await sleep(3)
    while (true) {
      await input("Are you ready to recieve your task? ('Yes' or 'No')")
      if (window.a === "Yes") {
        await sleep(0.5)
        print("Good:")
        await sleep(1)
        break
      } else if (window.a === "No") {
        print("Citizens should be enthusiastic about work.")
        print("-50 CWUs")
        window.CWU -= 50
        checkCWU()
        print(`CWUs: ${window.CWU}`)
        await sleep(1)
        break
      } else {
        await sleep(0.5)
        print("Invalid Response.")
        print("-30 CWUs")
        window.CWU -= 30
        checkCWU()
        print(`CWUs: ${window.CWU}`)
        await sleep(1)
      }
    }
    print("Guide To Futurespeak:")
    await sleep(0.5)
    print("1. Superlative degrees and comparison words are simplified")
    await sleep(1)
    print("2. Root words become both a noun and a verb")
    await sleep(1)
    print("3. Words with the abillity to function as both verbs and nouns should be seperated into their noun and verb counterparts")
    await sleep(1)
    await input("Okay?")
    print("Question 1:")
    await sleep(1)
    print("What would the Futurespeak translation of very cold be?")
    print("Is it:")
    await sleep(1)
    print("a.) pluscold")
    await sleep(0.5)
    print("or")
    await sleep(0.5)
    print("b.) excess cold")
    await input()
    if (window.a === "pluscold" || window.a === "a") {
      print("Correct.")
      await sleep(0.5)
      print("30/30 CWUs.")
      window.CWU += 30
      print(`CWUs: ${window.CWU}`)
    } else if (window.a === "excess cold" || window.a === "b") {
      print("Incorrect.")
      await sleep(0.5)
      print("0/10 CWUs.")
      print(`CWUs: ${window.CWU}`)
    } else {
      print("Invalid response.")
      await sleep(0.5)
      print("-30 CWUs")
      window.CWU -= 30
      checkCWU()
      print(`CWUs: ${window.CWU}`)
    }
    
    print("Question 2:")
    await sleep(1)
    print("What would the English translation of crimethink be?")
    print("Is it:")
    await sleep(1)
    print("a.) thoughtcrime")
    await sleep(0.5)
    print("or")
    await sleep(0.5)
    print("b.) crime")
    await input()
    
    if (window.a === "thoughtcrime" || window.a === "a") {
      print("Correct.")
      await sleep(0.5)
      print("30/30 CWUs.")
      window.CWU += 30
      print(`CWUs: ${window.CWU}`)
    } else if (window.a === "crime" || window.a === "b") {
      print("Incorrect.")
      await sleep(0.5)
      print("0/10 CWUs.")
      print(`CWUs: ${window.CWU}`)
    } else {
      print("Invalid response.")
      await sleep(0.5)
      print("-30 CWUs")
      window.CWU -= 30
      checkCWU()
      print(`CWUs: ${window.CWU}`)
    }
    await sleep(2)
    print("Final question:")
    print("Do you believe Futurespeak will improve the efficiency of Technopolis? (Y/N)")
    await input()
    print("COMCON thanks you for your input.")
    
  } else if (job4 === "humanDirect") {
    print("You are the director of human services.")
    await sleep(2)
    while (true) {
    await input("Are you ready to recieve your task? ('Yes' or 'No')")
    if (window.a === "Yes") {
      await sleep(0.5)
      print("Good:")
      await sleep(1)
      break
    } else if (window.a === "No") {
      print("Citizens should be enthusiastic about work.")
      print("-40 CWUs")
      window.CWU -= 40
      checkCWU()
      print(`CWUs: ${window.CWU}`)
      await sleep(1)
      break
    } else {
      await sleep(0.5)
      print("Invalid Response.")
      print("-30 CWUs")
      window.CWU -= 30
      checkCWU()
      print(`CWUs: ${window.CWU}`)
      await sleep(1)
    }
  }
    goodNames = ["F-55-M", "M-62-B", "B-76-G", "C-60-E", "M-46-P", "A-54-Z", "N-62-W", "J-67-N", "C-64-V", "R-55-T", "S-59-M", "F-91-A", "J-49-S", "J-56-C", "K-95-B","L-56-P", "E-77-A"]
    badNames = ["A-512-Z", "Fritzie Bitzie", "Fritz McGee", "Mister B", "N-62-8", "X Æ A-XII", "Robin Toes", "Jake (from) Statefarm", "Milo Peters", "Nathan Wu", "Aiden Zhou", "Braeden Gracy", "Katherine Brown", "Justin Newberg", "Lilly Porter", "Esteban Aguidrre"]
    sentence_contexts = ["Hi, how are you $$$?", "Hey $$$, whats uppp!", "COMCON's been treating us nice recently, right $$$?", "$$$ sorry I gotta go. I over-DOZED on sleep boosters.", "Hey, did you hear that $$$ over-DOZED on sleep boosters?", "Why does COMCON call ingestion enrichment devices IEDs? He's gonna blow something up, $$$.", "PeepoHey $$$ we're live! In today's stream we'll be...", "$$$, I just solved a 4d Rubik's Cube!!", "Yes $$$, there is no God, only COMCON.", "$$$ how's you're indigestion?", "$$$ GO PLAY TERRARIA", "Someone on this dev team is a Risk of Rain 2 addict", "Yummy beans", "KILL THE PIIIIIIIIIIIIIIIIIIIIIIG"]
    print("Listen up. There are two versions of this task. The easy one, and the hard one. This is your chance to decide who you will be.") 
    await sleep(4)
    print("Will you be the hard worker that goes above and beyond? The one that enables Technopolis to thrive? The one that saves us all.")
    await sleep(4)
    print("Or will you be the normal one. Staying in the background. A bystander.")
    await sleep(3)
    print("After this, there is no turning back. You take the easy route - the story ends, you wake up in your bed and believe whatever you want to believe. You take the red pill - you get rewarded greatly and Technopolis progresses to become a more efficient place.")
    await sleep(5)
    while (true) {
      print("So which do you choose?")
      await sleep(0.5)
      print("Hard = H")
      await sleep(0.5)
      print("Easy = E")
      await input()
      print("You will need to count the number of incorrect names. (eg. Justin Newberg instead of J-67-N")
      await sleep(2)
      print("You have 10 seconds.")
      await sleep(3)
      print("Ready?")
      if (window.a === "E") {
        hDirectNameAmount = 20
        SpeedFactor = 0.8
        CWUMultiplier = 1
        await sleep(0.5)
        print("Starting...")
        await sleep(1)
        break
      } else if (window.a === "H") {
        hDirectNameAmount = 35
        SpeedFactor = 0.5
        CWUMultiplier = 1.5
        await sleep(0.5)
        print("Starting...")
        await sleep(1)
        break
      } else {
        print("Invalid response.")
        await sleep(0.5)
        print("-30 CWUs")
        window.CWU -= 30
        checkCWU()
        print(`CWUs: ${window.CWU}`)
      }
    }
    GoodNameCount = 0
    BadNameCount = 0
    for (i = 0; i < hDirectNameAmount; i++) {
      if (Math.floor(5 * Math.random()) === 1) {
        BadNameCount += 1
        CurrentName = randomChoice(badNames)
        CurrentSentence = randomChoice(sentence_contexts)
        CurrentSentenceFinal = CurrentSentence.replace("$$$", CurrentName)
      } else {
        GoodNameCount += 1
        CurrentName = randomChoice(goodNames)
        CurrentSentence = randomChoice(sentence_contexts)
        CurrentSentenceFinal = CurrentSentence.replace("$$$", CurrentName)
      }
      print(CurrentSentenceFinal)
      await sleep(SpeedFactor)
    }
    await timedInput("Bad Names: ", 10000) //time in ms
    if (window.timedOut) {
      print("You ran out of time. -40 CWUs")
      await sleep(1)
      window.CWU -= 40
      responded = false
      checkCWU()
      print(`CWUs: ${window.CWU}`)
    } else {
      x = window.a
      responded = true
    }

    if (responded) {
      difference = BadNameCount - x
      if (difference < 0) {
        print(`You overcounted by ${Math.abs(difference)} names.`)
        await sleep(1)
        print("0 CWUs")
        await sleep(0.5)
        print(`CWUs: ${window.CWU}`)
      } else if (difference === 0) {
        print("You counted all of the bad names!")
        await sleep(1)
        print(`${(x * 5)+20} CWUs`)
        window.CWU += (x * 5) + 20
        print(`CWUs: ${window.CWU}`)
      } else {
        print(`You missed ${difference} names.`)
        await sleep(1)
        print(`${x * 5} CWUs`)
        window.CWU += x * 5
        print(`CWUs: ${window.CWU}`)
      }
    }
  } else if (job4 === "compDirect") {
        
  }
}

window.CPM = 1;
CPM1(function() {
  window.CPM = 2;
  CPM2(function() {
    window.CPM = 3;
    CPM3(function() {
      window.CPM = 4;
      CPM4()
    });
  });
});
