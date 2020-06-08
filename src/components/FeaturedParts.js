import React, { Component } from 'react';
import {PartsContext} from "../context";
import Loading from './Loading';
import Part from '../pages/Part';
import Title from '../components/Title';

export default class FeaturedParts extends Component {

    static contextType = PartsContext;

    render() {

        let{loading,FeaturedParts:parts} = this.context;


        parts = parts.map(part=>{

            return <Part Key = {part.id} part={part}/>
        })

        return (
            <Section className="featured-rooms">
            <Title title="Specials"/>

            <div className="featured-rooms-center">

                {loading ? <Loading/> : parts}
            </div>
                
            </Section>
        )
    }
}
