import React from "react";
import { useState, useReducer } from "react";
import createDataContext from "./createDataContext";


const blogReducer = (state,action) => {
    switch(action.type){
        case 'add_blogpost':
            return [...state, 
                {
                    id: Math.floor(Math.random() * 9999),
                    title: `Blog Post #${state.length + 1}`
                }];
        case 'delete_blogpost':
            return state.filter((blogPost) => blogPost.id !== action.payload); 
        default:
            return state;
    }
};

const deleteBlogPost = (dispatch) => {
    return id => {
        dispatch({type: 'delete_blogpost', payload: id})
    };
}
const addBlogPost = (dispatch) => {
    return () => {
        dispatch({ type: 'add_blogpost'})
    };
};


export const {Context, Provider} = createDataContext(blogReducer, {addBlogPost, deleteBlogPost},[]);