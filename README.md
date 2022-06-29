# About this project

This repository contains the code for the TU4EVER website. TU4EVER is a team built around the goal of preparing a Peugeot 205 for various raids.  
Both team members are interested in learning about car mechanics in addition to wanting to be part of a very interesting project.

All of the website is built by the team members.

# Contributing to the project

 * Create a branch
 * ```yarn``` to get dependencies
 * ```yarn dev``` to start development server

# General info

 * The website is using the [SvelteKit](https://kit.svelte.dev/) framework
 * The adapter used to deploy the website is ```adapter-static```
 * Hosting using *Github Pages*

# Publish to Github Pages

 * ```yarn build```
 * Empty the ```.nojekyll``` file
 * Add ```.``` in front of ```/.../``` files in the ```index.html``` file
 * Commit / push changes
 * ```yarn deploy```
