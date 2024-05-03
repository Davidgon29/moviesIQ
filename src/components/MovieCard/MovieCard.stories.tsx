import {Meta, StoryFn} from "@storybook/react";
import React from "react";

import IMovieCard from './types';
import MovieCard from "./MovieCard";

const meta = {
    title: 'Components/MovieCard',
    component: MovieCard,
    parameters: {
        layout: "centered",
        docs: {
            story: {
                inline: false,
                description: 'A MovieCard component',
                iframeHeight: 400,
            }
        },
    },
        argTypes: {
            title: {control:'text'},
            genreId: {control: 'number'},
            movieId: {control: 'number'},
            voteAverage: {control: 'number'},
            posterPath: {control: 'text'}
        },
        tags: ['autodocs'],
    } as Meta;

    export default meta;

    const Template: StoryFn<IMovieCard> = (args) => <MovieCard{...args} />;

    export const Default = Template.bind({});
    Default.args = {
        posterPath: 'https://image.tmdb.org/t/p/w500/5i6SjyDbDWqyun8klUuCxrlFbyw.jpg',
        title: 'Creed III',
        genreId: 18,
        movieId: 677179,
        voteAverage: 7.3,
    }
