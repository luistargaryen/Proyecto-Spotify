import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'album',
    loadComponent: () => import('./pages/album/album.page').then( m => m.AlbumPage)
  },
  {
    path: 'artist',
    loadComponent: () => import('./pages/artist/artist.page').then( m => m.ArtistPage)
  },
  {
    path: 'genre-song',
    loadComponent: () => import('./pages/genre-song/genre-song.page').then( m => m.GenreSongPage)
  },
  {
    path: 'likes',
    loadComponent: () => import('./pages/likes/likes.page').then( m => m.LikesPage)
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'logout',
    loadComponent: () => import('./pages/logout/logout.page').then( m => m.LogoutPage)
  },
  {
    path: 'main',
    loadComponent: () => import('./pages/main/main.page').then( m => m.MainPage)
  },
  {
    path: 'playlist-item',
    loadComponent: () => import('./pages/playlist-item/playlist-item.page').then( m => m.PlaylistItemPage)
  },
  {
    path: 'playlist',
    loadComponent: () => import('./pages/playlist/playlist.page').then( m => m.PlaylistPage)
  },
  {
    path: 'profile',
    loadComponent: () => import('./pages/profile/profile.page').then( m => m.ProfilePage)
  },
  {
    path: 'register',
    loadComponent: () => import('./pages/register/register.page').then( m => m.RegisterPage)
  },
  {
    path: 'search',
    loadComponent: () => import('./pages/search/search.page').then( m => m.SearchPage)
  },
  {
    path: 'search-song',
    loadComponent: () => import('./pages/search-song/search-song.page').then( m => m.SearchSongPage)
  },
  {
    path: 'song',
    loadComponent: () => import('./pages/song/song.page').then( m => m.SongPage)
  },
  {
    path: 'tabs',
    loadComponent: () => import('./pages/tabs/tabs.page').then( m => m.TabsPage)
  },
  {
    path: 'upload',
    loadComponent: () => import('./pages/upload/upload.page').then( m => m.UploadPage)
  },
];
