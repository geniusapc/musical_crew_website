export const MusicListReducer = (
  state = [
    { id: 1, title: "put it on me", arthur: "Ed sheeran", link: "https://www.youtube.com/watch?v=mj0XInqZMHY&pbjreload=10" },
    { id: 2, title: "Intensions", arthur: "justin bieber", link: "https://www.youtube.com/watch?v=3AyMjyHu1bA" },
    { id: 3, title: "Memories", arthur: "Marron 5", link: "https://www.youtube.com/watch?v=SlPhMPnQ58k" },
    { id: 4, title: "Bad Liars", arthur: "imagine dragons", link: "https://www.youtube.com/watch?v=I-QfPUz1es8" },
    { id: 5, title: "Falling", arthur: "Trevor Daniel", link: "https://www.youtube.com/watch?v=L7mfjvdnPno" },
    { id: 6, title: "What if i told you...", arthur: "Ali Gatie", link: "https://www.youtube.com/watch?v=NKzd_YiW9AQ" },
    { id: 7, title: "Y.O.U", arthur: "Luh Kel", link: "https://www.youtube.com/watch?v=0y_2VU7x0hA" },
    { id: 8, title: "Wanna be your man", arthur: "Mechie so crazy", link: "https://www.youtube.com/watch?v=VqZ6xrv5lFw" }
  ],
  action
) => {
  switch (action.type) {
    case "ADD":
      return [...state, { id: Math.random(0, 100), text: "mike", title: "new boi enter", duration: "3:45" }];
    case "GET_ID":
      return state.filter((st) => st.id !== action.payload ? st : null);
    default:
      return state;
  }
};

export const EventState = (Events = [
  {
    id: 1,
    title: "NICOLE RICHIE'S RAP PERSONAL IN HER ALBUM  ",
    img: "https://res.cloudinary.com/cmcwebcode/image/upload/v1587126483/mgid_ao_image_mtv_2_gpdqzq.jpg",
    text: `It’s an unusually rainy morning in Los Angeles, and Nicole Richie’s home garden is blooming. “Let's see, tomatoes are starting to come in, and sugar snap peas. We’ve got some eggplants, some garlic; rosemary and thyme, all the time,” she tells MTV News by phone, listing off what could be a near-complete grocery list. The 36-year-old House of Harlow designer and actress, who became a household name in the mid-2000s for her role alongside socialite-heiress Paris Hilton in the reality series The Simple Life, added amateur farmer to her extensive resume nearly a decade ago when she began cultivating a small plot with friends. “We started working on an edible garden, just one or two things, some strawberries, some blueberries,” she explains. “I just fell in love with it. It’s just so cool!” `
  },
  {
    id: 2,
    title: "FROM KANYE WEST TO KOBE BYRANT",
    img: "https://res.cloudinary.com/cmcwebcode/image/upload/v1587126491/mgid_ao_image_mtv_1_aekrcc.jpg",
    text: `Kanye West and Kobe Bryant. Two legends with twice-in-a-generation work ethics and completely unpredictable thought processes.
        Bryant's death in January profoundly affected West, as he recently revealed in GQ's May cover story. Inspired by the beloved five-time basketball champion, West explained why Bryant's memory keeps him going.`
  },
  {
    id: 3,
    title: "SEE SELENA GOMEZ LIKE YOU’VE NEVER SEEN",
    img: "https://res.cloudinary.com/cmcwebcode/image/upload/v1587126363/mgid_ao_image_mtv_wlgjuv.jpg",
    text: `Selena Gomez really can't believe that she has three number one albums. She's the new cover star of the latest edition of Interview magazine and, in a conversation with Amy Schumer, she revealed that the thought of her having several number one albums nearly didn't cross her mind. Chalk it up to her being one of the most humble denizens of the world we know as Hollywood. Her Interview magazine cover photoshoot shows a different side of her though. In it, she's boldly ready to take the world by storm via expensive car.`
  }
]) => {
  return Events;
};
