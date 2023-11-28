Boxing Combo Generator made using React.

![Screenshot](/assets/images/screenshot.PNG?raw=true)


Generates a boxing punch/movement combo based on what type of combo the user selects.

Offensive - Punching focused combo with supplemental movement
Defensive - Movement oriented combo with punches used defensively.
Balanced - Combination of punching and movement
Reactive - Purely random, moves executed in response to your opponent.

TODO:

- Animations for main page. Possibly a scrolling title and card-like animation for the generated combo.
- Rework combo generating function to designate moves based on either hand or movement. For example, if a 
generated punch uses the left hand then the next generated punch has a greater chance at being a punch with
the right hand. Movement moves should also generally be at the end for an offensive or balanced combo.
- Selectable punches available for a combo.