class App extends React.Component {

  constructor() {
    super();
    this.handleClickApp = this.handleClickApp.bind(this);
    this.state = {position : 1};
  }
 
  handleClickApp(nouvellePosition) {
    this.setState({ position: nouvellePosition });
  }

  
  render() {
    return (
      <div>
        <Header />
        <section id="home" className="padbot0">
          <Slider position={this.state.position}/>
          <Carousel test={this.test} fonctionClick={this.handleClickApp}/>
        </section>
      </div>
    )
  }
}

class Header extends React.Component {
  constructor() {
    super();
  
  }
  
  render() {
     return (
     <header>
			<div className="menu_block">
				<div className="container clearfix">
					
					<div className="logo pull-left">
						<a href="index.html" ><span className="b1">w</span><span className="b2">h</span><span className="b3">i</span><span className="b4">t</span><span className="b5">e</span> <span className="b4">box</span></a>
					</div>
          
				</div>
			</div>
		</header>
     )
   };
}

class Slider extends React.Component {
  constructor() {
    super();
  }
  
  render() {
    
      var selected1 = false;
      if(this.props.position == 1) {
        selected1 = true;
      }
      var selected2 = false;
      if(this.props.position == 2) {
        selected2 = true;
      }  
      var selected3 = false;
      if(this.props.position == 3) {
        selected3 = true;
      }
     
     return (
       <div className="flexslider top_slider">
        <ul className="slides">
          <SliderImage selectedImage={selected1} slideName="slide1" location="Lyon" title="vacances été" year="2017" desc="Vacance au calme dans une petite maison de campagne"/>
          <SliderImage selectedImage={selected2} slideName="slide2" location="Bretagne" title="weekend de mai" year="2016" desc="Un moment de detente en famille"/>
          <SliderImage selectedImage={selected3} slideName="slide3" location="Biarritz" title="Anniversaire de Théo" year="2017" desc="Surf and fun entre amis"/>
        </ul>
			</div>
     
     );
  }

}


class SliderImage extends React.Component {
  constructor() {
    super();
  
  }
  
  render () {
    
    var selected;
    if(this.props.selectedImage == true) {
      selected = "flex-active-slide";
    }
    
    return(
        <li className={this.props.slideName+" "+selected}>
          <div className="flex_caption1">
            <p className="title1 captionDelay2 FromTop">{this.props.location}</p>
            <p className="title2 captionDelay4 FromTop">{this.props.title}</p>
            <p className="title3 captionDelay6 FromTop">{this.props.year}</p>
            <p className="title4 captionDelay7 FromTop">{this.props.desc}</p>
          </div>
        </li>

    );
  }
  
}


class Carousel extends React.Component {
  constructor() {
    super();
    this.state = {position : 1};
    this.handleClickCarousel = this.handleClickCarousel.bind(this);
  }
  
  handleClickCarousel(nouvellePosition) {
    this.setState({position: nouvellePosition});
  }
  
  render() {
    
      var selected1 = false;
      if(this.state.position == 1) {
        selected1 = true;
      }
      var selected2 = false;
      if(this.state.position == 2) {
        selected2 = true;
      }  
      var selected3 = false;
      if(this.state.position == 3) {
        selected3 = true;
      }
      
    return(
      <div id="carousel">
        <ul className="slides">
          <CarouselImage selectedImage={selected1}  position="1" fonctionClickCarousel={this.handleClickCarousel} fonctionClick={this.props.fonctionClick} imageUrl="images/slider/slide1_bg.jpg"/>
          <CarouselImage selectedImage={selected2} position="2" fonctionClickCarousel={this.handleClickCarousel} fonctionClick={this.props.fonctionClick} imageUrl="images/slider/slide2_bg.jpg"/>
          <CarouselImage selectedImage={selected3} position="3" fonctionClickCarousel={this.handleClickCarousel} fonctionClick={this.props.fonctionClick} imageUrl="images/slider/slide3_bg.jpg"/>
        </ul>
      </div>
    )
  }

}


class CarouselImage extends React.Component {
  constructor() {
    super();
    this.handleClickCarouselImage = this.handleClickCarouselImage.bind(this);
  }
  
  handleClickCarouselImage() {
    console.log('je suis dans CarouselImage');
    this.props.fonctionClick(this.props.position);
    this.props.fonctionClickCarousel(this.props.position);
  }
  
  render() {
    
    var selected;
    if(this.props.selectedImage == true) {
      selected = "flex-active-slide";
    }
    return (
      <li onClick={this.handleClickCarouselImage} data-target="slide1" className={selected}><img src={this.props.imageUrl} alt="" /></li>  
    );
  }

}









var infoImages = [
  {location: 'Lyon' , title: 'vacances été', desc: 'Vacance au calme dans une petite maison de campagne' , year: '2017'},
  {location: 'Bretagne' , title: 'weekend de mai', desc: 'Un moment de detente en famille' , year: '2016'},
  {location: 'Biarritz' , title: 'Anniversaire Théo', desc: 'Surf and fun entre amis' , year: '2016'}
];

ReactDOM.render(
  <App/>,
  document.getElementById('page')
);