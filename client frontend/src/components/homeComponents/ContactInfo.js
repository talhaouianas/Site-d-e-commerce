import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
} from 'mdb-react-ui-kit';
const mdbreact = require('mdbreact');

export default function ContactInfo() {
  return (
  
    <MDBFooter style={{ backgroundColor: 'rgb(35,47,62)' }} className='text-white text-center text-lg-left'>
      <MDBContainer className='p-5'>
        <MDBRow>
     
          <MDBCol lg='12' md='12' className='mb-4 mb-md-0'>

          <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
       
    
            <p>Découvrez notre boutique d'achat de vente en ligne au Maroc, 
                    des produits spécialement sélectionnés pour vous ! Sur amazon,
                     nous vous proposons un large choix de produits parmi
                      les plus grandes marques aux meilleurs prix, 
                      d'une qualité exceptionnelle et contrôlée :
                       des smartphones, des smart TV 32 pouces, 
                       des TV Samsung 4K et QLed, des pc portables pas chers,
                        des parfums Homme & Femme, pour n'en citer que quelques-uns. 
                        Retrouvez la liste de nos meilleures marques 
                        en faisant un tour sur notre site de vêtements en ligne,
                         des chaussures Adidas et Nike, des produits de beauté Dermacol 
                         et Yves Rocher ainsi que notre catégorie Parapharmacie ! 
                         La mode est enfin accessible pour les hommes, 
                         les femmes et les enfants en un seul endroit! 
                </p>
          </MDBCol>

          
        </MDBRow>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgb(35,47,62)' }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-white' href='https://mdbootstrap.com/'>
          amazon.com
        </a>
      </div>
      <div id="back-top" >
    <a title="Go to Top" href="#"> <i class="fas fa-level-up-alt"></i></a>
</div>
    </MDBFooter>
  );
}
