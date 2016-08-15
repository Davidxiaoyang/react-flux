import React from 'react';
import AppDispatcher from '../dispatcher/AppDispather';

export default class ButtonActions{
    addNewItem(text){
        AppDispatcher.dispatch({
            actionType : 'ADD_NEW_ITEM',
            text : text
        });
    }
}