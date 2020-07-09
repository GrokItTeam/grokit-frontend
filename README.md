# GrokIt

## Using GrokIt to learn

> grok (verb): to understand completely and intuitively

Information is lost from our memory over time if no effort is made to retain it.

![Forgetting Curve](https://vectr.com/smbryar/a3qRCjhluB.svg?width=320&height=220&select=a3qRCjhluBpage0)

*Image from [Growth Engineering](https://www.growthengineering.co.uk/wp-content/uploads/2016/11/the-forgetting-curve.png)*

The most effective time to practise a skill or rehearse knowledge is just before you forget it. 
We will remind you what to work on each day, until you GrokIt.

![Spaced Practice](https://vectr.com/smbryar/a1rKHNM3C.svg?width=320&height=220&select=a1rKHNM3Cpage0)

*Image from [Growth Engineering](https://www.growthengineering.co.uk/wp-content/uploads/2016/09/combating-the-forgetting-curve.png)*

Learn more about Spaced Repition [here](https://www.gwern.net/Spaced-repetition).


## How to use GrokIt

Visit GrokIt [here](https://grokitteam.github.io/grokit-frontend/).

After you have set up an account you are able to add your first project that you are working on.
You can then add the skills that make up that project.

Each day GrokIt will display the optimum skill for you to practise that day.
Make sure you tell GrokIt that you actually did the practice!


## Extra Features

### Difficulty Rating

When you have done the practice you can rate how difficult you found it that day.
This directly affects the algorithm deciding when you next see that skill.
Not sure?
Just choose medium.

### Pomodoro Timer

Having trouble spending enough time on your practise?
Use the in-built [Pomodoro](https://en.wikipedia.org/wiki/Pomodoro_Technique) timer to give yourself a 25 min interval to get it done.

## Behind the scenes

The algorithm used to show the skill to practise each day is based on the [Fibonacci Sequence](https://en.wikipedia.org/wiki/Fibonacci_number).
In this pattern the values spread out, and so serve as a good basis for how often you should review a skill.

Exactly how often you need to review the skill depends on your retention of it, which is dependent on a wide variety of factors (how much time you spent learning it, how well it is linked to other memories, how complex the skill is etc). 
To help account for this you can rate the difficulty of the practise each time you do it.

## Future Work

Dependent on user feedback, these are the next features we are looking into:
- Charts to show progress
- Badges to reward progress
- Daily notifications
- Information about each skill and project (e.g. when it was last practised)
- Ability to add text to each skill/project to add extra information and useful links
- Predicted upcoming schedule