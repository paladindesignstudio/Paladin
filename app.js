(function(){
  const e = React.createElement;
  const {useEffect} = React;

  function Nav(){
    return e('header',{className:'header'},
      e('div',{className:'container', style:{display:'flex',alignItems:'center',justifyContent:'space-between',padding:0}},
        e('div',{className:'brand'},
          e('div',{className:'logo-small'},'P'),
          e('div',null,'Paladin Design Studio')
        ),
        e('nav',{className:'nav'},
          e('a',{href:'#projects'},'Projects'),
          e('a',{href:'#philosophy', style:{marginLeft:16}},'Philosophy'),
          e('a',{href:'#contact', style:{marginLeft:16}},'Contact')
        )
      )
    );
  }

  function Hero(){
    return e('section',{className:'hero', id:'hero'},
      e('div',{className:'container hero-inner'},
        e('div',{className:'hero-left'},
          e('div',{className:'kicker'},'Invoke Greatness'),
          e('h1',{className:'h1'},'Designing Dreams. Detailing Realities.'),
          e('p',{className:'lead'},'Paladin bridges timeless Palladian order with contemporary craft. We design spaces that honor heritage, perform for modern life, and age with elegance.'),
          e('div',null,
            e('a',{className:'btn', href:'#projects'},'View Projects'),
            e('a',{className:'btn btn-ghost', href:'#contact'},'Get In Touch')
          )
        ),
        e('div',{className:'panel'},
          e('img',{src:'assets/hero-architectural.jpg', alt:'Hero image'})
        )
      )
    );
  }

  function Philosophy(){
    return e('section',{className:'section', id:'philosophy'},
      e('div',{className:'container'},
        e('h2',null,'Philosophy'),
        e('p',{style:{color:'var(--muted)',maxWidth:900}},'At Paladin we layer classical proportion over contemporary living. Our work rests on five pillars: Sustainability, Luxury, Innovation, Tradition and Affordability. Each project begins with careful study — context, culture, light — and ends with a crafted reality: calm interiors, considered materials, and furniture made to last.'),
        e('div',{className:'grid'},
          e('div',{className:'card'}, e('strong',null,'Sustainability'), e('p',null,'Eco-responsive materials, passive design strategies and long-life construction.')),
          e('div',{className:'card'}, e('strong',null,'Luxury'), e('p',null,'Quiet, textural luxury — materials and details that reward attentive living.')),
          e('div',{className:'card'}, e('strong',null,'Innovation'), e('p',null,'High-fidelity 4K visuals and integrated building technology for seamless delivery.')),
          e('div',{className:'card'}, e('strong',null,'Tradition'), e('p',null,'Palladian order reinterpreted with local craft and vernacular nuance.')),
          e('div',{className:'card'}, e('strong',null,'Affordability'), e('p',null,'Transparent budgets and pragmatic construction strategies.'))
        )
      )
    );
  }

  function Projects(){
    const projects = [
      {id:1,title:'Petra — The Awakening',desc:'Event Space • 15,000 sq.ft • Rajkot',img:'assets/petra.jpg'},
      {id:2,title:'Neoclassical Elegance',desc:'Office Interior • 800 sq.ft • Rajkot',img:'assets/neoclassical.jpg'},
      {id:3,title:'X10 Skin Care Clinic',desc:'Healthcare Interior • 1,600 sq.ft • Rajkot',img:'assets/x10.jpg'},
      {id:4,title:'Hermes Square',desc:'Subterranean Retail • Bhagalpur • ₹100 Cr',img:'assets/hermes.jpg'}
    ];
    return e('section',{className:'section', id:'projects'},
      e('div',{className:'container'},
        e('h2',null,'Selected Projects'),
        e('div',{className:'grid'},
          projects.map(p=> e('div',{key:p.id},
            e('div',{className:'project-hero'},
              e('img',{src:p.img, alt:p.title})
            ),
            e('h3',null,p.title),
            e('p',{style:{color:'var(--muted)'}},p.desc)
          ))
        )
      )
    );
  }

  function Contact(){
    return e('section',{className:'section', id:'contact'},
      e('div',{className:'container'},
        e('h2',null,'Contact'),
        e('div',{className:'contact-grid'},
          e('div',{className:'contact-panel'},
            e('p',null,e('strong',null,'Paladin Design Studio')),
            e('p',null,'Patidar Chowk, Rajkot, Gujarat, India'),
            e('p',null,e('strong',null,'Phone:'),' +91 96625 24476'),
            e('p',null,e('strong',null,'Email: '), e('a',{href:'mailto:paladindesignstudio.in@gmail.com'},'paladindesignstudio.in@gmail.com')),
            e('p',null, e('a',{href:'https://www.instagram.com/paladin_design_studio', target:'_blank'},'Instagram'), ' • ',
              e('a',{href:'https://www.facebook.com/share/17VNpqPsg3/', target:'_blank'},'Facebook')
            ),
            e('p',{style:{color:'var(--muted)',marginTop:12}},'We offer complimentary 4K renderings for select projects. Inquire for details.')
          ),
          e('form',{className:'contact-panel', method:'POST', action:'https://formspree.io/f/yourFormID'},
            e('label',null, e('div',{style:{fontWeight:700,marginBottom:6}},'Your name'), e('input',{type:'text', name:'name', required:true, style:{width:'100%',padding:10,borderRadius:8,border:'1px solid rgba(255,255,255,0.04)'}})),
            e('label',{style:{display:'block',marginTop:10}}, e('div',{style:{fontWeight:700,marginBottom:6}},'Email'), e('input',{type:'email', name:'_replyto', required:true, style:{width:'100%',padding:10,borderRadius:8,border:'1px solid rgba(255,255,255,0.04)'}})),
            e('label',{style:{display:'block',marginTop:10}}, e('div',{style:{fontWeight:700,marginBottom:6}},'Message'), e('textarea',{name:'message', rows:6, required:true, style:{width:'100%',padding:10,borderRadius:8,border:'1px solid rgba(255,255,255,0.04)'}})),
            e('input',{type:'hidden', name:'_subject', value:'New inquiry from Paladin website'}),
            e('button',{className:'btn', type:'submit', style:{marginTop:12}},'Send Message')
          )
        )
      )
    );
  }

  function App(){
    useEffect(()=>{
      const obs = new IntersectionObserver((entries)=>{
        entries.forEach(entry=>{
          if(entry.isIntersecting){
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'none';
            obs.unobserve(entry.target);
          }
        });
      }, {threshold:0.12});
      document.querySelectorAll('.section, .hero-left, .panel, .project-hero').forEach((el,i)=>{
        el.style.opacity = 0;
        el.style.transform = 'translateY(18px)';
        el.style.transition = 'all 700ms cubic-bezier(.2,.9,.2,1)';
        obs.observe(el);
      });
    },[]);
    return e(React.Fragment, null,
      e(Nav),
      e(Hero),
      e(Philosophy),
      e(Projects),
      e(Contact),
      e('footer',{className:'footer'}, e('div',{className:'container'}, '© Paladin Design Studio — From Vision to Volume • Rajkot'))
    );
  }

  const dom = document.getElementById('root');
  ReactDOM.createRoot(dom).render(e(App));
})();