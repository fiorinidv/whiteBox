


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
     
     var sliderImageList = [];
     for(var i=0; i<this.props.infoImages.length; i++) {
       sliderImageList.push(<SliderImage index={i} selectedImage={this.props.selectedImage} image={this.props.infoImages[i]}/>);
     }
     
    return (
      <div className="flexslider top_slider">
				<ul className="slides">
        {sliderImageList}
				</ul>
			</div>
    )
   };
}


class SliderImage extends React.Component {
  constructor() {
    super();
  
  }
  
   render() { 
      var classVal = "slide"+(this.props.index+1);
      if(this.props.selectedImage == this.props.index+1) {
        classVal += " flex-active-slide";
      }
      
      return (
      <li className={classVal}>
        <div className="flex_caption1">
          <p className="title1 captionDelay2 FromTop">{this.props.image.location}</p>
          <p className="title2 captionDelay4 FromTop"> {this.props.image.title}</p>
          <p className="title3 captionDelay6 FromTop"> {this.props.image.year}</p>
          <p className="title4 captionDelay7 FromTop"> {this.props.image.desc}</p>
        </div>
      </li>
    );
   }
}


class Carousel extends React.Component {
  constructor() {
    super();
  }
  
  render() {
     var carouselImageList = [];
     
     for(var i=0; i<this.props.infoImages.length; i++) {
       carouselImageList.push(<CarouselImage onClick={this.props.onClick} index={i} selectedImage={this.props.selectedImage} imageUrl={this.props.infoImages[i].url}/>);
     }

    return (
      <div id="carousel">
				<ul className="slides">
          {carouselImageList}
        </ul>
			</div>
    )
   };
}


class CarouselImage extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
    this.props.onClick(this.props.index+1);
  }
  
   render() {
    var target = "slide"+(this.props.index+1);
    var selectedClassName = "";
    if(this.props.selectedImage == this.props.index+1){ 
      selectedClassName = "flex-active-slide";
    }
    return (
      <li onClick={this.handleClick} data-target={target} className={selectedClassName}><img src={'./images/slider/slide'+(this.props.index+1)+'_bg.jpg'} alt="" /></li>
    )
   };
}

class App extends React.Component {

  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.state = { selectedImage : 1 }
  }
  
  handleClick(index) {
    this.setState({selectedImage : index})
  }  
  
  render() {
    return (
      <div>
      <Header />
      <section id="home" className="padbot0">
        <Slider selectedImage={this.state.selectedImage} infoImages={this.props.infoImages}/>
        <Carousel onClick={this.handleClick} selectedImage={this.state.selectedImage} infoImages={this.props.infoImages}/>
      </section>
      </div>
    );
  }
}



var infoImages = [
  {location: 'Lyon' , title: 'vacances été', desc: 'Vacance au calme dans une petite maison de campagne' , year: '2017'},
  {location: 'Bretagne' , title: 'weekend de mai', desc: 'Un moment de detente en famille' , year: '2016'},
  {location: 'Biarritz' , title: 'Anniversaire Théo', desc: 'Surf and fun entre amis' , year: '2016'}
];

ReactDOM.render(
  <App infoImages={infoImages}/>,
  document.getElementById('page')
);