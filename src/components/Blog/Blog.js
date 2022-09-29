import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div>
            <h1 className='blog-header'>Welcome to My Blog</h1>
            <div className='blog'>
                <div className='qsn'>
                    <h3>How does React Work?</h3>
                    <p>ReactJS is one of the most popular JavaScript libraries for mobile and web application development. Created by Facebook, React contains a collection of reusable JavaScript code snippets used for user interface building called components.

                        It's important to note that ReactJS is not a JavaScript framework. That's because it's only responsible for rendering the components of an application's view layer. React is an alternative to frameworks like Angular and Vue, which all allow to create complex functions.
                    </p>
                </div>
                <div className='qsn'>
                    <h3>What is the difference between props and state?</h3>
                    <p>Props are used to pass data from one component to another.
                        The state is a local data storage that is local to the component only and cannot be passed to other components.
                        The this.setState property is used to update the state values in the component.</p>
                </div>
                <div className='qsn'>
                    <h3>What else does the useEffect do without data load?</h3>
                    <p>The outcome from a Component is to render "something" on the user interface with the rendering logic. Many factors drive the rendering logic,
                        The state values are defined and updated inside a component.
                        The props values are passed to the component.
                        The side effects.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;