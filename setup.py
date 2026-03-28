from setuptools import setup, find_packages

setup(
    name='buzzi',
    version='0.1.0',
    packages=find_packages(),
    install_requires=[
        # List your dependencies here
    ],
    package_data={
        '': ['*.xml', '*.kotlin']  # Adjust based on your specific files
    },
    entry_points={
        'console_scripts': [
            'buzzi=buzzi.main:main',  # Adjust based on your main function
        ],
    },
)