import React, {Component} from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';
import {connect} from 'react-redux';
import {Route, Redirect} from 'react-router-dom';

class Checkout extends Component{

    // state = {        
    // ingredients:null,
    // totalPrice: 0,
    // };

    checkoutCancelledHandler = () => {
        //console.log('i am at canceeled');
        this.props.history.goBack();
    };

    checkoutContinuedHandler = () => {
        //console.log('reached checkout continued');
        this.props.history.replace('/checkout/contact-data');
    };

    // componentWillMount(){
    //     const query = new URLSearchParams(this.props.location.search);
    //     const ingredients = {};
    //     let price;
    //     for(let param of query.entries()){
    //         if(param[0]==='price'){
    //             price = param[1];
    //         }else{
    //             ingredients[param[0]] = +param[1];
    //         }
            
    //     }
    //     this.setState({ingredients: ingredients, totalPrice: price});
    // }

render(){
    
    let summary = <Redirect to='/'/>
    const purchasedRedirect = this.props.purchased ?<Redirect to='/'/> : null;
    if(this.props.ings){
        summary = (
            
        <div>
        {purchasedRedirect}
        <CheckoutSummary 
        ingredients={this.props.ings} 
        checkoutCancelled={this.checkoutCancelledHandler}
        checkoutContinued={this.checkoutContinuedHandler}
        ></CheckoutSummary>

        <Route path={this.props.match.path + '/contact-data'}
        component={ContactData}/>
        )
        }/>

        </div>
        );
    }
    return summary;
    
};

}

const mapStateToProps = state => {
return{
    ings: state.burgerBuilder.ingredients,
    purchased: state.order.purchased

}
};

export default connect(mapStateToProps)(Checkout);