
type Tags = {
  tag:'medium'|'low'|'acRight';
}

type CardItemProps = {
  title: string;
  profileUrl: string;
  date?: string;
  tags: Tags[];
  index: number;
}

type ItemData = {
  title: string;
  item: CardItemProps[];
  constraintsRef?: any;
}


export const itemData: ItemData[] = [
  {
    title: 'To do',
    item:[
      {
        title: 'To Do',
        profileUrl: 'https://avatars.githubusercontent.com/u/2254731?v=4',
        date: '14-08 mai',
        tags: [
          {tag:'low'},
        ],
        index: 2,
      },
      {
        title: 'Done',
        profileUrl: 'https://avatars.githubusercontent.com/u/2254731?v=4',
        date: '16-08 alg',
        tags: [
        ],
        index: 1,
      },
    ]
  },
  {
    title: 'Doing',
    item:[
      {
        title: 'To Do',
        profileUrl: 'https://avatars.githubusercontent.com/u/2254731?v=4',
        date: '14-08 mai',
        tags: [
          {tag:'medium'},
        ],
        index: 1,
      },
      {
        title: 'Doing',
        profileUrl: 'https://avatars.githubusercontent.com/u/2254731?v=4',
        date: '15-08 jul',
        tags: [
          {tag:'medium'},
          {tag:'acRight'}
        ],
        index: 2,
      },
      {
        title: 'Done',
        profileUrl: 'https://avatars.githubusercontent.com/u/2254731?v=4',
        date: '16-08 alg',
        tags: [
          {tag:'medium'},
          {tag:'acRight'},
          {tag:'acRight'}
        ],
        index: 3,
      },
    ]
  },
  {
    title: 'Done',
    item:[
      {
        title: 'To Do',
        profileUrl: 'https://avatars.githubusercontent.com/u/2254731?v=4',
        date: '14-08 mai',
        tags: [
          {tag:'medium'},
        ],
        index: 1,
      },
    ]
  }
]