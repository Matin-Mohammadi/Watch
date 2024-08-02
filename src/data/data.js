let watches=[
    {
        name:"ali-watch",
        brandName:"rolex",
        price:"4'500'000'000",
        id:"01",
        image:"https://magazine.chrono24.com/cdn-cgi/image/f=auto,metadata=none,fit=cover,q=65,w=1190,h=595,dpr=2.0/2021/10/Rolex-Submariner-Magazin-2-1.jpg"
    },    {
        name:"reza-watch",
        brandName:"citizen",
        price:"4'500'000'000",
        id:"02",
        image:"https://magazine.chrono24.com/cdn-cgi/image/f=auto,metadata=none,fit=cover,q=65,w=1190,h=595,dpr=2.0/2021/10/Rolex-Submariner-Magazin-2-1.jpg"
    },    {
        name:"ahmad-watch",
        brandName:"omega",
        price:"4'500'000'000",
        id:"03",
        image:"https://magazine.chrono24.com/cdn-cgi/image/f=auto,metadata=none,fit=cover,q=65,w=1190,h=595,dpr=2.0/2021/10/Rolex-Submariner-Magazin-2-1.jpg"
    },    {
        name:"mohammad-watch",
        brandName:"zodiac",
        price:"4'500'000'000",
        id:"04",
        image:"https://magazine.chrono24.com/cdn-cgi/image/f=auto,metadata=none,fit=cover,q=65,w=1190,h=595,dpr=2.0/2021/10/Rolex-Submariner-Magazin-2-1.jpg"
    },    {
        name:"alireza-watch",
        brandName:"rolex",
        price:"4'500'000'000",
        id:"05",
        image:"https://magazine.chrono24.com/cdn-cgi/image/f=auto,metadata=none,fit=cover,q=65,w=1190,h=595,dpr=2.0/2021/10/Rolex-Submariner-Magazin-2-1.jpg"
    },    {
        name:"aghaee-watch",
        brandName:"citizen",
        price:"4'500'000'000",
        id:"06",
        image:"https://magazine.chrono24.com/cdn-cgi/image/f=auto,metadata=none,fit=cover,q=65,w=1190,h=595,dpr=2.0/2021/10/Rolex-Submariner-Magazin-2-1.jpg"
    },    {
        name:"Professor Hosseini-watch",
        brandName:"omega",
        price:"4'500'000'000",
        id:"07",
        image:"https://magazine.chrono24.com/cdn-cgi/image/f=auto,metadata=none,fit=cover,q=65,w=1190,h=595,dpr=2.0/2021/10/Rolex-Submariner-Magazin-2-1.jpg"
    },    {
        name:"King.Matin-watch",
        brandName:"zodiac",
        price:"4'500'000'000",
        id:"08",
        image:"https://magazine.chrono24.com/cdn-cgi/image/f=auto,metadata=none,fit=cover,q=65,w=1190,h=595,dpr=2.0/2021/10/Rolex-Submariner-Magazin-2-1.jpg"
    },    {
        name:"Kianmehr-watch",
        brandName:"rolex",
        price:"4'500'000'000",
        id:"09",
        image:"https://magazine.chrono24.com/cdn-cgi/image/f=auto,metadata=none,fit=cover,q=65,w=1190,h=595,dpr=2.0/2021/10/Rolex-Submariner-Magazin-2-1.jpg"
    },    {
        name:"Halimi-watch",
        brandName:"omega",
        price:"4'500'000'000",
        id:"10",
        image:"https://magazine.chrono24.com/cdn-cgi/image/f=auto,metadata=none,fit=cover,q=65,w=1190,h=595,dpr=2.0/2021/10/Rolex-Submariner-Magazin-2-1.jpg"
    }
]


export const getAllWatches=()=>watches

export const getWatch=id=>watches.find(watch=> watch.id === id)

export const deleteWatch=id=>watches=watches.filter(watch=>watch.id!==id)