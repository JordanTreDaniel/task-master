interface task {
    title: string,
    description: string,
    importance?: number,
    notes?: object[]
}

export class Task implements task {
    constructor(
        public title: string,
        public description: string,
        public importance: number,
        public notes?: object[]
        ) {

        }
} 

export const tasksArr: Task[] = [
    {
      title: "Go to class",
      description: "I have to take care of one of my mandatory classes right now.",
      importance: 8,
      notes: [{
          reason: 'So that I can succeed',
          thoughts: 'I just wanna be successful'
      },
      {
          reason: 'Because i want to be an Angular Pro',
          thoughts: 'Its gonna take a lot of working'
      }
      ]
    },
    {
      title: "Build this app",
      description: "I need to build a presentable app w/ ng4 by the end of June",
      importance: 10,
      notes: [{
          reason: 'So that I can succeed',
          thoughts: 'I just wanna be successful'
      },
      {
          reason: 'Because i want to be an Angular Pro',
          thoughts: 'Its gonna take a lot of working'
      }
      ]
    },
    {
      title: "Keep your mind on this money",
      description: "I have been broke too damn long",
      importance: 10,
      notes: [{
          reason: 'So that I can succeed',
          thoughts: 'I just wanna be successful'
      },
      {
          reason: 'Because i want to be an Angular Pro',
          thoughts: 'Its gonna take a lot of working'
      }
      ]
    },
    {
      title: "Buy a tent",
      description: "So I can have fun at the park",
      importance: 6,
      notes: [{
          reason: 'So that I can succeed',
          thoughts: 'I just wanna be successful'
      }]
    }
  ];   