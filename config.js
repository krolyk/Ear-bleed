module.exports = {
    app: {
        px: '?',
        token: 'OTAzNTQ0ODU0NjQ1MTc4NDE4.GlU4G7.rvWcN3Y2h1OCAGlRea-i_IEdXYbx2HuZt-W440',
        playing: '?help'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: 'DJ',
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'seek', 'shuffle', 'skip', 'stop', 'volume']
        },
        maxVol: 100,
        loopMessage: false,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
}