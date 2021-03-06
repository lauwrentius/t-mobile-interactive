import { combineReducers } from 'redux'
import { INIT_PROJECT, UPDATE_VIDEO, SET_PLAYBACK,INIT_SELECTION } from 'actions'

// poster: projData.poster,
//   //     autoplay: false,
//   //     sources: [{
//   //       src: videoData.url,
//   //       type: 'video/mp4'
// function projectState( state = {}, action) {
//
// }

function videoState (state = {}, action) {
  const {obj} = action

  switch (action.type){
    case INIT_PROJECT:
      return {
          poster: obj.poster,
          autoplay:false,
          captions: obj.captions,
          sources: obj.url
        }
    case UPDATE_VIDEO:
      return {
        poster: '//vmgstudios.blob.core.windows.net/images/Interactive_TitleCards-blank.png',
        autoplay: true,
        captions: obj.captions,
        sources: obj.url
      }
    default:
      return state
  }
}

function interactionState (state = {overlays:[]}, action) {
  const {obj} = action
  switch (action.type){
    case INIT_PROJECT:
      return {overlays:obj.overlays, end:obj.end, complete:obj.complete}

    case UPDATE_VIDEO:
      return {overlays:obj.overlays, end:obj.end, complete:obj.complete}

    default:
      return state
  }
}

function playbackState (state = {time:0}, action) {
  switch (action.type){
    case INIT_PROJECT:
      return {"time":0}
    case UPDATE_VIDEO:
      return {"time":0}
    case SET_PLAYBACK:
      return {...action.playback}

    default:
      return state
  }
}

function selectionState (state = {prevSelection:null}, action) {
  switch (action.type){
    case INIT_PROJECT:
      return {"prevSelection":null}

    case INIT_SELECTION:
      return Object.assign(action.selection)
    default:
      return state
  }
}

export default combineReducers({
  // projectState,
  videoState,
  interactionState,
  playbackState,
  selectionState
})
