export type FileTypes = Record<
  'image' | 'video' | 'audio' | 'text',
  string[]
>

export const fileTypes: FileTypes = {
  image: ['apng', 'avif', 'gif', 'jpg', 'jpeg', 'jfif', 'pjpeg', 'pjp', 'png', 'svg', 'webp', 'bmp', 'ico', 'cur', 'tif', 'tiff'],
  video: ['webm', 'mpg', 'mp2', 'mpeg', 'mpe', 'mpv', 'ogg', 'mp4', 'm4p', 'm4v', 'avi', 'wmv', 'mov', 'qt', 'flv', 'swf', 'avchd'],
  audio: ['pcm', 'wav', 'aiff', 'mp3', 'aac', 'ogg', 'wma', 'flac', 'alac'],
  text: ['doc', 'pages', 'docx', 'md', 'eml', 'rtf', 'txt', 'log', 'asc', 'msg', 'wps', 'ipynb']
}