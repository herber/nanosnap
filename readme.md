# Nanosnap 

A simple micorservice for taking screenshots of websites.

<a href="https://glitch.com/edit/#!/remix/nanosnap">
  <img src="https://cdn.glitch.com/2bdfb3f8-05ef-4035-a06e-2043962a3a13%2Fremix%402x.png?1513093958726" alt="remix button" aria-label="remix" height="33">
</a>

## Install

```
$ npm install nanosnap
```

## Usage

### Start server

```
nanosnap
```

### Take a screenshot

```
https://<instance-url>/?url=<url>[&width=<width>&height=<height>&delay=<delay>]
```

#### Options

| Name   | Default | Description                     | Optional |
| -----  | ------- | ------------------------------- | -------- |
| url    | `null`  | The website's url               | ✖       |
| width  | `1200`  | The screenshot's width          | ✔       |
| height | `950`   | The screenshot's height         | ✔       |
| delay  | `0`     | Delay after the network is idle | ✔       |

## CLI

```
$ npm install --global nanosnap
```

```
$ nanosnap

  Usage
    nanosnap

  Options
    --port The port you want nanosnap to listen to [Default: 3000]

  Examples
    $ nanosnap --port 80
```

## License

MIT © [Tobias Herber](http://tobihrbr.com)
