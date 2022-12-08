import {trigger, stagger, state, style, transition, animate } from '@angular/animations';
export const slideIn = trigger("slideIn", [
  state(
    "*",
    style({
      transform: "translateX(100%)"
    })
  ),
  state(
    "in",
    style({
      transform: "translateX(0)"
    })
  ),
  state(
    "out",
    style({
      transform: "translateX(-100%)"
    })
  ),
  transition("* => in", animate("600ms ease-in")),
  transition("in => out", animate("600ms ease-in"))
]);

export const slideInLeft = trigger("slideInLeft", [
  transition(":enter", [
    style({
      position: "absolute",
      transform: "translateX(-100%)"
    }),
    animate(
      "500ms",
      style({
        position: "absolute",
        transform: "translateX(0)",

      })
    )
  ]),
  transition(":leave", [
    style({
      transform: "translateX(0)",

    }),
    animate(
      "500ms",
      style({
        transform: "translateX(-100%)"
      })
    )
  ])
]);


export const slideInLeft2 = trigger("slideInLeft2", [
  transition(":enter", [
    style({
      transform: "translateX(100%)",

    }),
    animate(
      "500ms",
      style({
        transform: "translateX(0)",
        display: "flex",

      }),
    )
  ]),
  transition(":leave", [
    style({
      transform: "translateX(0)",
      display: "flex",

    }),
    animate(
      "500ms",
      style({
        transform: "translateX(100%)",

      })
    )
  ])
]);

export const slideInRight = trigger("slideInRight", [
  transition(":enter", [
    style({
      transform: "translateX(100%)",

    }),
    animate(
      "500ms",
      style({
        transform: "translateX(0)",
      })
    )
  ]),
  transition(":leave", [
    style({
      transform: "translateX(0)",
    }),
    animate(
      "500ms",
      style({
        transform: "translateX(100%)"
      })
    )
  ])
]);

export const slideInRight2 = trigger("slideInRight2", [
  transition(":enter", [
    style({
      transform: "translateX(-100%)"
    }),
    animate(
      "500ms",
      style({
        transform: "translateX(0)",
      })
    )
  ]),
  transition(":leave", [
    style({
      transform: "translateX(0)",
    }),
    animate(
      "500ms",
      style({
        transform: "translateX(-100%)"
      })
    )
  ])
]);

export const slideInTop2 = trigger("slideInRight", [
  transition(":enter", [
    style({
      transform: "translateY(100%)"
    }),
    animate(
      "500ms",
      style({
        transform: "translateY(0)",
        display: "flex"
      })
    )
  ]),
  transition(":leave", [
    style({
      transform: "translateY(0)",
      display: "flex"
    }),
    animate(
      "500ms",
      style({
        transform: "translateY(100%)",
      })
    )
  ])
]);

export const slideOutTopLinks = trigger("slideOutTopLinks", [
  transition(":enter", [
    style({
      height: 0,
      opacity: 0
    }),
    animate(
      "500ms",
      style({
        height: "25%",
        opacity: 1
      })
    )
  ]),
  transition(":leave", [
    style({
      height: "25%",
      opacity: 1
    }),
    animate(
      "500ms",
      style({
        height: 0,
        opacity: 0
      })
    )
  ])
]);
export const slideOutTopLinks2 = trigger("slideOutTopLinks", [
  transition(":enter", [
    style({
      height: 0,
      opacity: 0
    }),
    animate(
      "500ms",
      style({
        height: "70%",
        opacity: 1
      })
    )
  ]),
  transition(":leave", [
    style({
      height: "70%",
      opacity: 1
    }),
    animate(
      "500ms",
      style({
        height: 0,
        opacity: 0
      })
    )
  ])
]);


export const notification = trigger("notification", [
  transition(":enter", [
    style({
      transform: "translateX(-100%)"

    }),
    animate(
      "500ms",
      style({
       transform: "translateX(0)"

      })
    )
  ]),
  transition(":leave", [
    style({
      transform: "translateX(0)"

    }),
    animate(
      "500ms",
      style({
        transform: "translateX(-100%)"
      })
    )
  ])
]);
