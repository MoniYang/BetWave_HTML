

    

    // //创建实例
    var index = {
        template: ""
    };
     
   
    var overview = {
        template: "home"
    };

    var promotion = {
        template: ""
    };

    var Affiliate = {
        template: ""
    };
    
   
    //创建一个路由对象
    var routes = [
        {
            path: '/home',
             component: index, 
             name: "home"
        },
        {
            path: '/overview', 
            component: overview, 
            name: "overview"
        },
        {
            path: '/promotion', 
            component: promotion, 
            name: "promotion"
        },
        {
            path: '/Affiliate', 
            component: Affiliate, 
            name: "Affiliate"
        },
    ];
  
    //创建实例
    var router0 = new VueRouter({
        routes
    });

    var app = new Vue({
        el: "#app",
        router: router0,
        data: {
            
            items: [
                {content: '首页', id: "home"},
                {content: '概述', id: "overview"},
            ],
            topNavItems:[
                { 
                    topNavText: 'promotion',
                    id:'promotion',
                },
                {   topNavText: 'Affiliate',
                    id:'Affiliate',
                },
                { topNavText: 'Crypto'},
                { topNavText: 'profile'},
                { topNavText: 'Transaction'}
            ],
            GameNav:[
                {
                    GameNavText:'RNG/SLOTS',
                    GameNavDropItems:[
                        { GameImg:'images/sports/1.png' },
                        { GameImg:'images/sports/2.png' },
                        { GameImg:'images/sports/3.png' },
                        { GameImg:'images/sports/4.png' },
                        { GameImg:'images/sports/5.png' }
                    ]
                },
                {
                    GameNavText:'Slots',
                    GameNavDropItems:[
                        { GameImg:'images/slots/2.png' },
                        { GameImg:'images/slots/4.png' },
                        { GameImg:'images/slots/8.png' },
                        { GameImg:'images/slots/9.png' },
                        { GameImg:'images/slots/10.png' },
                        { GameImg:'images/slots/13.png' },
                        { GameImg:'images/slots/14.png' }
                    ]
                },
                {
                    GameNavText:'LIVE CASINO',
                    GameNavDropItems:[
                        { GameImg:'images/slots/2.png' },
                        { GameImg:'images/slots/4.png' },
                        { GameImg:'images/slots/8.png' },
                        { GameImg:'images/slots/9.png' },
                        { GameImg:'images/slots/10.png' },
                        { GameImg:'images/slots/13.png' },
                        { GameImg:'images/slots/14.png' }
                    ]
                },
                {
                    GameNavText:'P2P/Pocker'
                },
                {
                    GameNavText:'Esports'
                },
                {
                    GameNavText:'Lottery'
                },
                {
                    GameNavText:'Hunting'
                }
            ]
        }
    });


  