# Features

## AutoEq

The [AutoEq] feature contains precalculated results from jaakkopasanen's great work. Over 5000 entries are shipped with Wavelet and contain the optimal frequency response compensation for those specific headphone models.

- **Headphone model** lets you search the database or view your previously selected headphones. Tap the search icon next to the title to add new listings or tap the x icon to remove an item if you selected the wrong one. _Make sure to only use the entry that is meant for your headphone model_.

- **Import** Allows you to load custom generated AutoEq data. Details can be found at [import instructions].

## Graphic equalizer

The graphic equalizer consists of 9 bands. You can set each slider independently to change the balance in frequency response or to remove obvious imbalance issues. You can also use this feature to compensate the frequency response of your speakers or your headphones if they're are not listed in the AutoEq section, or if you would like to add some coloration to your audio stream.

- **Presets** contains a few presets for a given set of sound signatures. The first entry will reset all bands to stock.

## Equal loudness

Equal loudness implements the ISO 226 standard. This standard describes how strong certain frequencies must be reproduced in order to perceive them equally loud at various volume levels. This means with equal loudness enabled, the sound signature will stay the same no matter at which volume step you are listening. With equal loudness disabled, medium frequencies will be more noticable at a low volume levels for example.

- **Volume threshold** sets the threshold on which equal loudness becomes active. Set your device volume to the level you would normally prefer and set this slider to the lowest value just before the graph starts changing.

## Bass boost

Bass boost is available on Android 9 exclusively. It amplifies the lower frequencies.

- **Bass boost strength** lets you set the strength.

## Reverberation

Reverberation is available if legacy mode is disabled. It adds the effect of a sound bouncing off the wall from a room you would be listening in.

- **Preset** lets you choose the room size.

## Virtualizer

Virtualization is the effect of spatializing audio channels. This effect will widen the stereo image (when listening in stereo).

- **Strength** determines the effect strength.

## Bass tuner

Bass tuner allows you to set a very precise bass boost or reduction. This can be useful if your speaker system has a resonant peak in the lower frequencies or a point where long soundwaves cancel each other out.

- **Bass type** Allows you to choose between natural, transient compressor and sustain compressor types. The transient compressor adds the possibility to increase or decrease the initial bass punch. The sustain compressor preserves the transient and is able to increase or reduce the rumble. This can be used to reduce resonance without compromising the initial kick or to make balanced armature drivers sound less anemic.

- **Cutoff frequency** determines until what frequency the sound is processed.

- **Post-gain** sets the gain to compensate for. This value can either be negative or positive.

## Limiter

The limiter removes volume spikes from your audio streams. Sometimes this is desired in noisy environments where you need to turn up the volume in quiet parts of the music and later turn it down when the music becomes louder.

- **Attack time** determines after how many milliseconds the effect will kick in. A fast time will help remove unwanted peaks very effectively, but is very noticable. A longer attack time might not be fast enough, but it will sound more natural.

- **Release time** determines how long the effect will be active. A fast time will give that pumping sound. A long time will sound smoother, but may negate a fast attack time and affect transients in your music.

- **Ratio** sets the effect strength. If a signal is 1dB over the threshold, it will reduce the output by the ratio level you set.

- **Threshold** determines above what volume level the limiter should become effective.

- **Automatic post-gain** calculates the highest gain of all features combined and then substracts this value from the output gain. This makes sure you never boost your volume above the hardware limit, to prevent distortion or clipping from happening.

- **Post-gain** allows you to compensate for volume changes caused ratio and threshold.

## Channel balance

Channel balance allows you to control the left and right channel output volumes separately. This can come in handy when you can't sit in center of your speaker setup or when your headphones have a difference in impedance between their left and right channels.
Some phones have a limiter built in that causes volume ducking when you boost above a certain amount of dB. You can also use this feature to control the overall volume output and to prevent this ducking from happening.

- **Channel gain** controls the balance between left and right.

[AutoEq]: https://github.com/jaakkopasanen/AutoEq
[import instructions]: Import.md
