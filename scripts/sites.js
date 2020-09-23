'use strict'

const sites = [
  {
    contact: "placeholder",
    langs: [''],
    type: "other",
    title: "Audacity",
    url: "https://www.audacityteam.org"
  },

  {
    contact: "placeholder",
    langs: [''],
    type: "bookmark",
    title: "Wallabag",
    url: "https://www.wallabag.org/en"
  },

  {
    contact: "placeholder",
    langs: [''],
    type: "bookmark",
    title: "Polar",
    url: "https://getpolarized.io/"
  },

  {
    contact: "placeholder",
    langs: [''],
    type: "bookmark",
    title: "Memex",
    url: "https://getmemex.com/"
  },

  {
    contact: "placeholder",
    langs: [''],
    type: "browser",
    title: "Firefox",
    url: "https://www.mozilla.org/en-US/firefox/new/"
  },

  {
    contact: "placeholder",
    langs: [''],
    type: "browser",
    title: "Brave",
    url: "https://brave.com/"
  },

  {
    contact: "placeholder",
    langs: [''],
    type: "browser",
    title: "Vivaldi",
    url: "https://vivaldi.com/"
  },

  {
    contact: "placeholder",
    langs: [''],
    type: "browser",
    title: "Chromium (ungoogled)",
    url: "https://ungoogled-software.github.io/ungoogled-chromium-binaries/"
  },

  {
    contact: "placeholder",
    langs: [''],
    type: "browser",
    title: "Ferdi",
    url: "https://getferdi.com/"
  },

  {
    contact: "placeholder",
    langs: [''],
    type: "rss reader",
    title: "Winds",
    url: "https://getstream.io/winds/"
  },

  {
    contact: "placeholder",
    langs: [''],
    type: "storage",
    title: "NextCloud",
    url: "https://nextcloud.com/"
  },

  {
    contact: "placeholder",
    langs: [''],
    type: "other",
    title: "Keys.pub",
    url: "https://keys.pub"
  },

  {
    contact: "placeholder",
    langs: [''],
    type: "email",
    title: "Thunderbird",
    url: "https://www.thunderbird.net/"
  },

  {
    contact: "placeholder",
    langs: [''],
    type: "email",
    title: "Kanmail",
    url: "https://kanmail.io/"
  },

  {
    contact: "placeholder",
    langs: [''],
    type: "email",
    title: "MailDrop",
    url: "https://maildrop.cc/"
  },

  {
    contact: "placeholder",
    langs: [''],
    type: "email",
    title: "ProtonMail",
    url: "https://protonmail.com/"
  },

  {
    contact: "placeholder",
    langs: [''],
    type: "email",
    title: "Tutanota",
    url: "https://www.tutanota.com/"
  },

  {
    contact: "placeholder",
    langs: [''],
    type: "email",
    title: "FastMail",
    url: "https://www.fastmail.com/"
  },

  {
    contact: "placeholder",
    langs: [''],
    type: "other",
    title: "Firefox Send",
    url: "https://send.firefox.com"
  },

  {
    contact: "placeholder",
    langs: [''],
    type: "map",
    title: "Open Street Map",
    url: "https://www.openstreetmap.org"
  },

  {
    contact: "placeholder",
    langs: [''],
    type: "other",
    title: "VLC",
    url: "https://www.videolan.org/vlc/"
  },

  {
    contact: "placeholder",
    langs: [''],
    type: "instant messaging",
    title: "Element",
    url: "https://element.io/"
  },

  {
    contact: "placeholder",
    langs: [''],
    type: "instant messaging",
    title: "Signal",
    url: "https://www.signal.org/"
  },

  {
    contact: "placeholder",
    langs: [''],
    type: "note taking",
    title: "Standard Notes",
    url: "https://standardnotes.org/"
  },

  {
    contact: "placeholder",
    langs: [''],
    type: "note taking",
    title: "Simplenote",
    url: "https://simplenote.com/"
  },

  {
    contact: "placeholder",
    langs: [''],
    type: "note taking",
    title: "Joplin",
    url: "https://joplinapp.org/"
  },

  {
    contact: "placeholder",
    langs: [''],
    type: "note taking",
    title: "Mak",
    url: "https://inns.studio/mak"
  },

  {
    contact: "placeholder",
    langs: [''],
    type: "password manager",
    title: "Keepass",
    url: "https://keepass.info/"
  },

  {
    contact: "placeholder",
    langs: [''],
    type: "password manager",
    title: "Bitwarden",
    url: "https://bitwarden.com/"
  },

  {
    contact: "placeholder",
    langs: [''],
    type: "password manager",
    title: "Firefox Lockwise",
    url: "https://www.mozilla.org/en-US/firefox/lockwise/"
  },

  {
    contact: "placeholder",
    langs: [''],
    type: "password manager",
    title: "Bitwarden",
    url: "https://bitwarden.com/"
  },

  {
    contact: "placeholder",
    langs: [''],
    type: "password manager",
    title: "Leepass",
    url: "https://lesspass.com/#/"
  },

  {
    contact: "placeholder",
    langs: [''],
    type: "password manager",
    title: "Butter cup",
    url: "https://buttercup.pw/"
  },

  {
    contact: "placeholder",
    langs: [''],
    type: "password manager",
    title: "Keeweb",
    url: "https://keeweb.info/"
  },

  {
    contact: "placeholder",
    langs: [''],
    type: "password manager",
    title: "KeePassXC",
    url: "https://keepassxc.org/"
  },

  {
    contact: "placeholder",
    langs: [''],
    type: "other",
    title: "Kap",
    url: "https://getkap.co"
  },

  {
    contact: "placeholder",
    langs: [''],
    type: "search engine",
    title: "DuckDuckGo",
    url: "https://duckduckgo.com/"
  },

  {
    contact: "placeholder",
    langs: [''],
    type: "search engine",
    title: "StartPage",
    url: "https://www.startpage.com/"
  },

  {
    contact: "placeholder",
    langs: [''],
    type: "search engine",
    title: "Searx",
    url: "https://searx.me/"
  },

  {
    contact: "placeholder",
    langs: [''],
    type: "social network",
    title: "Diaspora",
    url: "https://diasporafoundation.org/"
  },

  {
    contact: "placeholder",
    langs: [''],
    type: "social network",
    title: "Aether",
    url: "https://getaether.net/"
  },

  {
    contact: "placeholder",
    langs: [''],
    type: "social network",
    title: "Tildes",
    url: "https://tildes.net/"
  },

  {
    contact: "placeholder",
    langs: [''],
    type: "social network",
    title: "Mastodon",
    url: "https://joinmastodon.org/"
  },

  {
    contact: "placeholder",
    langs: [''],
    type: "social network",
    title: "Plemora",
    url: "https://pleroma.social/"
  },

  {
    contact: "placeholder",
    langs: [''],
    type: "social network",
    title: "Pixelfed",
    url: "https://pixelfed.org/"
  },

  {
    contact: "placeholder",
    langs: [''],
    type: "spreadsheet",
    title: "LibreOffice Calc",
    url: "https://www.libreoffice.org/discover/calc/"
  },

  {
    contact: "placeholder",
    langs: [''],
    type: "text editor/IDE",
    title: "MacDown",
    url: "https://macdown.uranusjr.com/"
  },

  {
    contact: "placeholder",
    langs: [''],
    type: "text editor/IDE",
    title: "Vim",
    url: "https://www.vim.org/"
  },

  {
    contact: "placeholder",
    langs: [''],
    type: "text editor/IDE",
    title: "LibreOffice Writer",
    url: "https://www.libreoffice.org/discover/writer/"
  },

  {
    contact: "placeholder",
    langs: [''],
    type: "voip",
    title: "Jitsi",
    url: "https://jitsi.org/"
  },

  {
    contact: "placeholder",
    langs: [''],
    type: "other",
    title: "PeerTube",
    url: "https://joinpeertube.org/"
  },

  {
    contact: "placeholder",
    langs: [''],
    type: "other",
    title: "Indico",
    url: "https://getindico.io/"
  },

  {
    contact: "placeholder",
    langs: [''],
    type: "note taking",
    title: "Left",
    url: "https://hundredrabbits.itch.io/left"
  },

  {
    contact: "placeholder",
    langs: [''],
    type: "text editor/IDE",
    title: "Zettlr",
    url: "https://www.zettlr.com/"
  },

  {
    contact: "placeholder",
    langs: [''],
    type: "phone",
    title: "The Light Phone",
    url: "https://www.thelightphone.com"
  },

  {
    contact: "placeholder",
    langs: [''],
    type: "instant messaging",
    title: "Threema",
    url: "https://threema.ch/en"
  },

  {
    contact: "placeholder",
    langs: [''],
    type: "instant messaging",
    title: "Conversation",
    url: "https://conversations.im/"
  },

  {
    contact: "placeholder",
    langs: [''],
    type: "voip",
    title: "Big Blue Button",
    url: "https://bigbluebutton.org/"
  },

  {
    contact: "placeholder",
    langs: [''],
    type: "translation",
    title: "DeepL",
    url: "https://www.deepl.com/translator"
  },

  {
    contact: "placeholder",
    langs: [''],
    type: "rss reader",
    title: "Miniflux",
    url: "https://miniflux.app/"
  },

  {
    contact: "placeholder",
    langs: [''],
    type: "storage",
    title: "Piwigo",
    url: "https://piwigo.com/"
  },

  {
    contact: "placeholder",
    langs: [''],
    type: "blog",
    title: "Blot",
    url: "https://blot.im"
  },

  {
    contact: "placeholder",
    langs: [''],
    type: "blog",
    title: "Sigle",
    url: "https://www.sigle.io/"
  },


  {
    contact: "placeholder",
    langs: [''],
    type: "note taking",
    title: "Mak ink",
    url: "https://mak.ink/"
  },

  {
    contact: "placeholder",
    langs: [''],
    type: "text editor/IDE",
    title: "Atome",
    url: "https://atom.io/"
  },

  {
    contact: "placeholder",
    langs: [''],
    type: "text editor/IDE",
    title: "Brackers",
    url: "http://brackets.io/"
  },

  {
    contact: "placeholder",
    langs: [''],
    type: "text editor/IDE",
    title: "Visual Code Studio",
    url: "https://code.visualstudio.com/"
  },

  {
    contact: "placeholder",
    langs: [''],
    type: "text editor/IDE",
    title: "Ghostwriter",
    url: "https://wereturtle.github.io/ghostwriter/"
  },

  {
    contact: "placeholder",
    langs: [''],
    type: "text editor/IDE",
    title: "GitBook",
    url: "https://www.gitbook.com/"
  },

  {
    contact: "placeholder",
    langs: [''],
    type: "text editor/IDE",
    title: "Bibisco",
    url: "https://bibisco.com/"
  },

  {
    contact: "placeholder",
    langs: [''],
    type: "text editor/IDE",
    title: "LaTex",
    url: "https://www.latex-project.org/"
  },

  {
    contact: "placeholder",
    langs: [''],
    type: "browser",
    title: "Tor",
    url: "https://www.torproject.org/"
  },

  {
    contact: "placeholder",
    langs: [''],
    type: "rss reader",
    title: "NetNewsWire",
    url: "http://netnewswireapp.com/"
  },

  {
    contact: "placeholder",
    langs: [''],
    type: "other",
    title: "wormhole",
    url: "https://magic-wormhole.readthedocs.io/"
  },

  {
    contact: "placeholder",
    langs: [''],
    type: "other",
    title: "age",
    url: "https://github.com/FiloSottile/age"
  },

  {
    contact: "placeholder",
    langs: [''],
    type: "rss reader",
    title: "FreshRSS",
    url: "https://freshrss.org/"
  },

  {
    contact: "placeholder",
    langs: [''],
    type: "rss reader",
    title: "Manyverse",
    url: "https://www.manyver.se/"
  },

  {
    contact: "placeholder",
    langs: [''],
    type: "social network",
    title: "Scuttlebutt",
    url: "https://scuttlebutt.nz"
  },

  {
    contact: "placeholder",
    langs: [''],
    type: "text editor/IDE",
    title: "stroke",
    url: "https://stroke.lllllllllllllllll.com/"
  }
  
]

/*
Make sure you've read the README!
Don't forget the comma on the previous entry!
No trailing slashes or commas!
Alphabetize your keys!
protocol://url.domain.ext
*/

if (module && module.exports) {
  module.exports = sites
}
