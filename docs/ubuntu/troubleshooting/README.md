# Troubleshooting and Known Issues

## Troubleshooting

To troubleshoot and resolve issues, you can use the following log files:

```
/var/log/ubuntu2cloudlinux.log - conversion log
/var/log/lve-stats3.log - lve-stats daemon
/var/log/lve-stats.log - lve-stats Python components and older package versions
/var/log/dmesg - kernel module
```

## Known issues

1. `alt-php*-zts` packages are not available at the moment.
2. CageFS uses `tmpreaper` from the `alt-tmpreaper` package instead of `tmpwatch`.
