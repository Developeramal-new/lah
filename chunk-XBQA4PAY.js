import{Aa as e,Ba as t,C as b,Ca as n,D as f,Fa as i,Ga as O,K as y,M as S,Va as P,X as w,Y as E,_ as C,i as h,ia as k,j as d,q as s,qa as c,r as g,ra as v,ta as M,v as x,za as u}from"./chunk-RDNAEGDS.js";var $=a=>a*(2-a),I=(()=>{let r=class r{set count(o){this.count$.next(o)}set duration(o){this.duration$.next(o)}constructor(o,m){this.elementRef=o,this.renderer=m,this.count$=new h(0),this.duration$=new h(2e3),this.currentCount$=g([this.count$,this.duration$]).pipe(y(([p,j])=>{let L=d.now();return x(0,d).pipe(s(()=>d.now()-L),s(l=>l/j),S(l=>l<=1),s($),s(l=>Math.round(l*p)),f(p),b())})),this.text=""}ngOnInit(){this.displayCurrentCount()}displayCurrentCount(){this.currentCount$.subscribe(o=>{this.renderer.setProperty(this.elementRef.nativeElement,"innerHTML",o+this.text)})}};r.\u0275fac=function(m){return new(m||r)(v(k),v(M))},r.\u0275dir=C({type:r,selectors:[["","countUp",""]],inputs:{count:[w.None,"countUp","count"],duration:"duration",text:"text"},standalone:!0});let a=r;return a})();var D=(()=>{let r=class r{};r.\u0275fac=function(m){return new(m||r)},r.\u0275cmp=E({type:r,selectors:[["lah-home"]],standalone:!0,features:[O],decls:116,vars:9,consts:[["id","carouselExampleRide","data-bs-ride","true",1,"carousel","slide"],[1,"carousel-inner"],[1,"carousel-item","active"],["src","assets/home/carousel1.jpg","alt","...",1,"d-block","w-100",2,"height","90vh"],[1,"carousel-item"],["type","button","data-bs-target","#carouselExampleRide","data-bs-slide","prev",1,"carousel-control-prev"],["aria-hidden","true",1,"carousel-control-prev-icon"],[1,"visually-hidden"],["type","button","data-bs-target","#carouselExampleRide","data-bs-slide","next",1,"carousel-control-next"],["aria-hidden","true",1,"carousel-control-next-icon"],[1,"container-fluid"],[1,"row","mt-2","pt-4","pb-5"],[1,"col-12","text-center"],[1,"w-100"],[1,"mt-4","container"],[1,""],[1,"container","mt-4"],[1,"row","albums","d-flex","align-items-center","justify-content-center"],[1,"col-sm-3"],[1,"card"],["src","../../../assets/home/homecaro1.webp","alt","...",1,"card-img-top"],[1,"card-body"],[1,"card-text"],["href","#",1,"btn","btn-dark"],[1,"container","mt-4","pb-5"],[1,"row"],[1,"w-100","text-center"],[1,"row","mt-4","counters","d-flex","align-items-center","justify-content-center"],[1,"col-sm-3","d-flex","align-items-center","justify-content-center"],[1,"card-body","d-flex","align-items-center","justify-content-center","flex-column"],["src","assets/home/calendar.png","width","64px","alt","",2,"margin-bottom","0.5rem"],[2,"color","var(--primary)",3,"countUp","duration","text"],["src","assets/home/courthouse.png","width","64px","alt","",2,"margin-bottom","0.5rem"],["src","assets/home/maps.png","width","64px","alt","",2,"margin-bottom","0.5rem"],[1,"testimonials"],[1,"container","pb-5","mt-4"],[1,"col-12","mt-4","text-center"],[1,"row","mt-5"],[1,"col-3","offset-1"],["src","assets/home/homecaro1.webp","alt","...",1,"w-100","img"],[1,"col-7","text-center","d-flex","justify-content-center","align-items-center","flex-column"],[1,"mb-4"],[1,"col-3","mt-4"],["src","assets/home/homecaro1.webp","alt","...",1,"w-100"]],template:function(m,p){m&1&&(e(0,"div",0)(1,"div",1)(2,"div",2),n(3,"img",3),t(),e(4,"div",4),n(5,"img",3),t(),e(6,"div",4),n(7,"img",3),t()(),e(8,"button",5),n(9,"span",6),e(10,"span",7),i(11,"Previous"),t()(),e(12,"button",8),n(13,"span",9),e(14,"span",7),i(15,"Next"),t()()(),e(16,"div",10)(17,"div",11)(18,"div",12)(19,"h3",13),i(20,"Professional Wedding Photographers"),t(),e(21,"div",14)(22,"p",15),i(23," Lorem Ipsum is simply dummy text of the printing and typesetting industry. "),n(24,"br"),i(25,"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages. "),n(26,"br"),i(27,"and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. "),t()(),e(28,"div",16)(29,"div",17)(30,"div",18)(31,"div",19),n(32,"img",20),e(33,"div",21)(34,"p",22),i(35," Some quick example text to build on the card title and make up the bulk of the card's content. "),t(),e(36,"a",23),i(37,"View Album"),t()()()(),e(38,"div",18)(39,"div",19),n(40,"img",20),e(41,"div",21)(42,"p",22),i(43," Some quick example text to build on the card title and make up the bulk of the card's content. "),t(),e(44,"a",23),i(45,"View Album"),t()()()(),e(46,"div",18)(47,"div",19),n(48,"img",20),e(49,"div",21)(50,"p",22),i(51," Some quick example text to build on the card title and make up the bulk of the card's content. "),t(),e(52,"a",23),i(53,"View Album"),t()()()()()()()()(),e(54,"div",24)(55,"div",25)(56,"h3",26),i(57,"Our Milestones"),t()(),e(58,"div",27)(59,"div",28)(60,"div",19)(61,"div",29),n(62,"img",30)(63,"h4",31),e(64,"h6"),i(65,"Events"),t()()()(),e(66,"div",28)(67,"div",19)(68,"div",29),n(69,"img",32)(70,"h4",31),e(71,"h6"),i(72,"Cities"),t()()()(),e(73,"div",28)(74,"div",19)(75,"div",29),n(76,"img",33)(77,"h4",31),e(78,"h6"),i(79,"States"),t()()()()()(),e(80,"div",34)(81,"div",35)(82,"div",25)(83,"div",36)(84,"h3"),i(85,"What Our Client Says?"),t()()(),e(86,"div",37)(87,"div",38),n(88,"img",39),t(),e(89,"div",40)(90,"h4",41),i(91,"Sandhiya & Swami"),t(),e(92,"p"),i(93," Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remainin "),t()()()()(),e(94,"div",35)(95,"div",25)(96,"div",36)(97,"h3"),i(98,"Our Social Media Feed"),t()()(),e(99,"div",25)(100,"div",42),n(101,"img",43),t(),e(102,"div",42),n(103,"img",43),t(),e(104,"div",42),n(105,"img",43),t(),e(106,"div",42),n(107,"img",43),t(),e(108,"div",42),n(109,"img",43),t(),e(110,"div",42),n(111,"img",43),t(),e(112,"div",42),n(113,"img",43),t(),e(114,"div",42),n(115,"img",43),t()()()),m&2&&(c(63),u("countUp",500)("duration",3e3)("text"," +"),c(7),u("countUp",10)("duration",3e3)("text"," +"),c(7),u("countUp",4)("duration",3e3)("text",""))},dependencies:[P,I],styles:[".albums[_ngcontent-%COMP%]{margin-top:3rem}.albums[_ngcontent-%COMP%]   .col-sm-3[_ngcontent-%COMP%]{margin:0 3rem}.albums[_ngcontent-%COMP%]   .col-sm-3[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{box-shadow:0 2px #0000004d;border:0px}.counters[_ngcontent-%COMP%]   .col-sm-3[_ngcontent-%COMP%]{margin:0 3rem}.counters[_ngcontent-%COMP%]   .col-sm-3[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{box-shadow:0 2px 2px 2px #0000001a;border-radius:30px;width:200px;height:200px;border:0px}.testimonials[_ngcontent-%COMP%]{background-color:#f6f6f6}.testimonials[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]{border-radius:50px}"]});let a=r;return a})();export{D as HomeComponent};
