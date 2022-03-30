export class MenuItem {
    constructor(
        public names: string,
        public route: string,
        public icon: string = ''
    ) {}
}

/*export const menuList = [
    new MenuItem('Dashboard', 'dashboard',  'dashboard'),
    new MenuItem('Users', 'users',  'person'),
    new MenuItem('Tournament Management','tm', 'calendar_today'):{

    }
    
];
export const menuList=[
    {
      icon: "dashboard", route: "dashboard",names: "Dashboard"
    },
    {
      icon: "people", route: "um",names: "Users Management"
     
    },
    {
     icon: "calendar_today", route: "tm",
      names: [{ name: "Tournament Management", link: "tm" },
      { name: "View Tournaments", link: "view"},
      { name: "Matches", link :"matches"}
      ]
    }
  ]*/
export const menuList=[
    {
      name: 'Dashboard',
      route: 'dashboard',
      icon:'dashboard',
      children: [
        {
         name: 'home',
          route: 'home',
          icon: 'home' ,
        },
      ],
    },
       {
        name: 'Users & Roles',
        route: 'um',
        icon:'person',
      
      },
      {
        name: 'Tournament Management',
        route:'tm',
        icon: 'calendar_today',
        children: [
        {
          name: 'View Tournaments',
          route: '/tournament/view',
        },
        {
          name: 'Matches',
          route: 'tournament/matches',
        },
      ]
    },
  ]
  