import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";
import Items from "./components/Items";



class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
          orders:[],
          currentItems:[],
          items: [
           
            {
              id:1,
              title:"Джон Уик 4",
              img:'John_Wick_4_poster.jpg',
              category:'Films',
              price:'2200'
            },
            {
              id:2,
              title:"Aspan Gallery",
              img:'puhsintskiy_105.jpg',
              category:'Places',
              price:'990'
            },
            {
              id:3,
              title:"Стендап концерт Галыма Калиакбарова",
              img:'140ef95420f083da8f25689fc232eee1_800xauto-q-85.jpg',
              category:'Posters',
              price:'4000'
            },
          
            {
              id:4,
              title:"Джохан 2",
              img:'p1200x1730.webp',
              category:'Films',
              price:'2200'
            },
           
            
            {
              id:5,
              title:" Крид 3 ",
              img:'40435u54496_1920x.jpg',
              category:'Films',
              price:'2300'
            },
            {
              id:6,
              title:"МузТокШоу «Худеть – от слова худо?»",
              img:'42015u54364_khudet-ot-slova-khudo.jpg',
              category:'Places',
              price:'3000'
            },
            {
              id:7,
              title:"Футбольный матч ФК Ордабасы - ФК Кайсар",
              img:'msg912348924-11453.jpg',
              category:'Posters',
              price:'600'
            },
            {
              id:8,
              title:"Стендапт концерт Евгений Чебаткова «Москитная сетка»",
              img:'40728u55147_standup-kontsert-evgeniya-chebatkova-moskitnaya-setka-almaty.jpg',
              category:'Posters',
              price:'7000'
            },
            {
              id:9,
              title:" Хотя бы кинода 2 ",
              img:'image-2023-04-06-T142516-727.webp',
              category:'Films',
              price:'2200'
            },
            
           
            {
              id:10,
              title:"Мир турецкиз сериалов в Алматы",
              img:'mir-turet4skikh-serialov-v-almaty.jpeg',
              category:'Posters',
              price:'6000'
            },
            {
              id:11,
              title:"Возрожденные",
              img:'image-2023-04-22-T204114-069.webp',
              category:'Films',
              price:'3000'
            },
            {
              id:12,
              title:"Квиз, плиз!",
              img:'photo1683320802.jpeg',
              category:'Places',
              price:'2500'
            },
            {
              id:13,
              title:"Мой котик и я",
              img:'Whats-App-Image-2023-04-10-at-09-52-54.webp',
              category:'Films',
              price:'1800'
            },
            {
              id:14,
              title:" Конная прогулка по живописному и уютному ущелью Талдыбулак ",
              img:'BE95FB14-F483-4487-BB66-C64DB8128135.jpeg.ee0b6d9f3cbbec6187caca276e4f7e5d.jpeg',
              category:'Places',
              price:'15000'
            },
            {
              id:15,
              title:"Детский мастер-класс по приготовлению пиццы",
              img:'master-klass_pizza-2.jpg',
              category:'Places',
              price:'4990'
            },
            {
              id:16,
              title:"Футбольный матч ФК Кайрат - ФК Актобе",
              img:'актобе1.jpg',
              category:'Posters',
              price:'500'
            },
            {
              id:17,
              title:"Восхождение на вершину западного Казыгурта с Гид Мастер",
              img:'medium_pexels-alexander-igrevsky-5151296.jpg',
              category:'Places',
              price:'7000'
            },
            {
              id:18,
              title:"Премьера Беу Кыздар-ай",
              img:'тикетон51651651651.jpg',
              category:'Posters',
              price:'1500'
            },

          ],
          showFullItem:false,
          fullItem:{}
        }
        this.state.currentItems=this.state.items
        this.addToOrder = this.addToOrder.bind(this)
        this.deleteOrder = this.deleteOrder.bind(this)
        this. chooseCategory = this. chooseCategory.bind(this)
        this.onShowItem = this.onShowItem.bind(this)
    }
    render(){
  return (
    <div className="wrapper">
      <Header orders={this.state.orders} onDelete ={this.deleteOrder} />
      <Categories  chooseCategory={this. chooseCategory} />
      <Items onShowItem={this.onShowItem} items = {this.state.currentItems} onAdd = {this.addToOrder} />
       {this.state.showFullItem && <ShowFullItem onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem} />}
      <Footer />
    </div>
  )
 }
onShowItem(item){
  this.setState({fullItem:item})
  this.setState({showFullItem:!this.state.showFullItem})
}


 chooseCategory(category){
    if(category==='all'){
      this.setState({currentItems:this.state.items})
      return
    }
   this.setState({
    currentItems:this.state.items.filter(el=>el.category===category)
   })
 }
 deleteOrder (id){
    this.setState({orders:this.state.orders.filter(el => el.id !== id )})
 }
   addToOrder(item){
    let isInArray
    this.state.orders.forEach(el=>{
      if(el.id===item.id)
      isInArray = true
    })
    if(!isInArray)
      this.setState({orders:[...this.state.orders,item]})
   }
}


export default App;
