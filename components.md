## GOTV react components

### Common
    <Menu> (Top menu)
    
### Training

    <PageLayout> (Top navigation, title, bottom button, back button / breadcrumb)
    <Video> (Video Element)
    <Calendly> (The calendar options)
    <Carousel> (The carousel on the training page)### After onboarding
    <CardButton>
    <DataTableButton> (Button that is present within the Data Table)
    <VoterCheckLoading> (Loading / Found / Not Found)
    
### App Router

    /signup - standard signup
    /signup/[id] - prefilled signup
    /signup/mobile/[phoneNumber] - phone number signup    
    
    /ambassador/training/[pageId]#[carouselPageNumber]
    /ambassador/home
    /ambassador/triplers/invite
    /ambassador/triplers/confirm
    /ambassador/triplers/invite/search - Do we need this ? It makes more sense to do it inline    /payments
    
    /payments/add
    /payments/edit    /profile
    /profile/edit    /help
    
    /help/scheduleCall - Outside link ?
    /help/faq - Outside link ?
