
export const getInitial = async () => {
  return await {
    title: 'Invitacion Boda: Danny & Sofía',
    template: 'wedding1',
    components: [
      { type: 'FrontPage' },
      { type: 'CountDown' },
      { type: 'Information' },
      { type: 'CarrouselPage' },
      { type: 'PartyDetails' },
      { type: 'GiftsPage' },
      { type: 'ShareMedia' }
    ],
    footers: {
      type: 'FooterGeneral'
    }

  }
}
