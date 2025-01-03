# Troubleshooting and Known Issues

## Troubleshooting

To troubleshoot and resolve issues, you can use the following log files:

```
/var/log/ubuntu2cloudlinux.log - conversion log
/var/log/lve-stats.log - lve-stats
/var/log/dmesg - kernel module
```

## Known issues

1. `alt-php*-zts` packages are not available at the moment.
2. The `tmpreaper package` is used instead of `tmpwatch`.
