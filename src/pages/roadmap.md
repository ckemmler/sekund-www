---
title: Roadmap
---

# Roadmap

## Rethinking the sharing, interaction and spreading environment

Sekund is based on Obsidian's philosophy of creating and organising a knowledge base through non-linear relationships between notes, independent of one's own working environment. The non-linear relationships between notes lead to the ability to atomise notes to make them more flexible and reusable.  
This atomised creation, this networked structure of content is finally a very good way to work within a group of people. Why be satisfied with your own knowledge production to advance your project and why not share your own research with others? Why not pool all our individual knowledge?

Share, discuss, disseminate. This is the promise that Sekund intends to develop since its creation. Sekund wants to support collective intelligence initiatives through these features that are ultimately simple to use.  
Isn't that what all social networks are about? Yes, in part. But the essence of Obsidian is to move from a promotional space to a collaborative space. Without this fundamental basis, Sekund would probably not be relevant.

Collaboration is essential for us. Digital transformation cannot do everything and its promise of socialisation has often, in the end, isolated people from each other, disconnected them from reality, polarised discussions, marginalised individuals, made them dependent on ephemeral visibility. Collaboration is not the promise of society but a precondition for making it possible. Sekund is only a tool and a space for exchange, so collaboration is up to you.

In this perspective, we don't want to carry this project without hearing what users have to tell us and teach us. Help us improve our product and share your experiences to inspire others.

## Plugin

### Redesign of the application

The application was redesigned to be as intuitive as possible. Analysis of user interactions and feedback from some users showed that the interface was not very easy to understand.  
Indeed, some features had been developed on an existing layer without rethinking the whole plugin experience.  
As a result, the Sekund panel on the right has 3 features: notifications, contats, share, (publish).  
Discussions on a note that used to be on the right are now integrated directly into the note as a "sekund-discussion" code fence. More intuitive and comfortable.  
We will analyse the experience of users of this new version and hope that the direction taken is effective and sustainable.

### New features

- A code fence "sekund-note-status" contains all the relevant information of your note for the sharing and publishing features.
- A new page with an automatically generated code fence "sekund-index" allows you to view and access all the notes exchanged with another user or within a group. This is very useful to make it easier to find your way around.

## Workspace

For the moment there is only one workspace, the Sekund workspace. This workspace contains a database of all Sekund users. Eventually, we want to make it possible to create private workspaces. This means that an organisation could be completely independent in terms of its users and have its own database. Many people have made this request and we understand the interest in doing so. However, this adaptation technically requires a lot of time investment and also requires that an organisation making this request has people who can implement and update this workspace. The option is being considered but is not yet on the agenda.

## Publishing environment

There is a clear interest in allowing Sekund users to publish their notes on a website. From the perspective of collaborative work, we are evaluating and studying several possibilities that are available to us. Defining what the ideal publication environment would be means studying what is currently being done and for the moment we have drawn up a typology which can of course be improved and which deserves to be given feedback by users.

- **Public link**: a public link redirects to a web page accessible to all which contains the published (or publicly shared) note. This note is completely decontextualised and is not intended to fit into any particular structure. It is therefore an informal sharing.
- **Blog**: A blog is a collection of notes (posts) which may or may not be related to each other except that they belong to an author and that this author wishes to give access to his published notes via a list of articles. For the moment this feature exists and is called "pubish".
  The blog has an index page with the user's profile, the list of published notes and one page per published note.
- **Group blog**: The idea is the same as the blog, except that it contains all the notes published by a group. The context is already much more precise since the nature of a group is to work on a particular subject that needs to be specified and explained. The group blog therefore has a higher level of complexity than the blog. This option is to be considered and does not yet exist on Sekund.
- **Blog platform**: the blog platform contains the notes published by all the users of a workspace. It is not a group blog but rather a network blog. There are therefore many notes and precise rules or algorithms must be able to determine the structure, importance and chronology of the articles. Display by theme, by category, by author, by date,...
  Typically this is the case for Medium. The complexity is even higher than for the group blog, but there is a clear advantage in doing so to give more visibility or coherence to a set of notes. Imagine that associations working in different parts of the world on the theme of health need to share and publish their work. Each association could publish their studies or publications on their own website, but this would be quite tedious. Shouldn't there be (in addition) a site that includes all the work published by a whole community in order to have an overview of what is going on? The answer is yes. Having a workspace and an associated blog platform would definitely be an option.
- **Editorial space**: The editorial space contains the same functionality as the blog platform except that it is dictated by an editorial policy. In the blog platform each post is published independently and there is ultimately no algorithm deciding what is priority/not priority, relevant/not relevant. The editorial space is more political in that there are certain rules to be respected and priorities to be given.

This is a brief overview of the typology of dissemination spaces envisaged by Sekund. Is it relevant? Does it meet concrete needs? Do we need to think differently?
We have this analysis of course within the framework of Obsidian's use and we hope one day to have enough input from users to refine this future project which seems to us really interesting.

## IBIS / Discourse Graph

The discourse graph allows you to link several notes together in order to support a given issue or topic. This is very practical and even essential in a collaborative framework on a specific topic requiring the provision of assertions, evidence and sources.  
Each author participates in the elaboration of a coherent and synthetic whole in subjects related to scientific research for example.  
Implementing such a tool in Sekund would serve a particular type of collaboration requiring a series of linked arguments.  
What do we need? Ultimately a target note and a type of relationship our note has with it.

- **The topic or question**: the reference note on which other elements to produce or support a fact are based.
- **Assertion**: a note subordinate to the topic that will inform or generate arguments for the topic.
- **Evidence**: evidence is either subordinate to an assertion, in which case it validates or invalidates it (support/oppose). Evidence can also be directly subordinate to the subject, in which case it informs or generates arguments.
- **Sources**: are subordinate to evidence in order to support or contextualise. Sources include all the documentation that makes the evidence tangible.

Integrating this functionality for a discussion group seems to us to be welcome for certain knowledge production approaches and for research work. This need has not been formally requested by Sekund users and evaluating it would be a good thing. Also, please feel free to tell us about your practices or needs that such a feature could fill.

## Make the backend open source

The vision that everyone can have their own workspace.
