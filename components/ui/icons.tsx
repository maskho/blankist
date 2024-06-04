'use client'

import * as React from 'react'

import { cn } from '@/lib/utils'

function IconNextChat({
  className,
  inverted,
  ...props
}: React.ComponentProps<'svg'> & { inverted?: boolean }) {
  const id = React.useId()

  return (
    <svg
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('size-4', className)}
      {...props}
    >
      <defs>
        <linearGradient
          id={`gradient-${id}-1`}
          x1="10.6889"
          y1="10.3556"
          x2="13.8445"
          y2="14.2667"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={inverted ? 'white' : 'black'} />
          <stop
            offset={1}
            stopColor={inverted ? 'white' : 'black'}
            stopOpacity={0}
          />
        </linearGradient>
        <linearGradient
          id={`gradient-${id}-2`}
          x1="11.7555"
          y1="4.8"
          x2="11.7376"
          y2="9.50002"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={inverted ? 'white' : 'black'} />
          <stop
            offset={1}
            stopColor={inverted ? 'white' : 'black'}
            stopOpacity={0}
          />
        </linearGradient>
      </defs>
      <path
        d="M1 16L2.58314 11.2506C1.83084 9.74642 1.63835 8.02363 2.04013 6.39052C2.4419 4.75741 3.41171 3.32057 4.776 2.33712C6.1403 1.35367 7.81003 0.887808 9.4864 1.02289C11.1628 1.15798 12.7364 1.8852 13.9256 3.07442C15.1148 4.26363 15.842 5.83723 15.9771 7.5136C16.1122 9.18997 15.6463 10.8597 14.6629 12.224C13.6794 13.5883 12.2426 14.5581 10.6095 14.9599C8.97637 15.3616 7.25358 15.1692 5.74942 14.4169L1 16Z"
        fill={inverted ? 'black' : 'white'}
        stroke={inverted ? 'black' : 'white'}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <mask
        id="mask0_91_2047"
        style={{ maskType: 'alpha' }}
        maskUnits="userSpaceOnUse"
        x={1}
        y={0}
        width={16}
        height={16}
      >
        <circle cx={9} cy={8} r={8} fill={inverted ? 'black' : 'white'} />
      </mask>
      <g mask="url(#mask0_91_2047)">
        <circle cx={9} cy={8} r={8} fill={inverted ? 'black' : 'white'} />
        <path
          d="M14.2896 14.0018L7.146 4.8H5.80005V11.1973H6.87681V6.16743L13.4444 14.6529C13.7407 14.4545 14.0231 14.2369 14.2896 14.0018Z"
          fill={`url(#gradient-${id}-1)`}
        />
        <rect
          x="11.2222"
          y="4.8"
          width="1.06667"
          height="6.4"
          fill={`url(#gradient-${id}-2)`}
        />
      </g>
    </svg>
  )
}

function IconBlankist({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      fill="currentColor"
      // viewBox="0 0 256 256"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('size-8', className)}
      {...props}
      // width="500.000000pt"
      // height="500.000000pt"
      viewBox="0 0 500 500"
      preserveAspectRatio="xMidYMid meet"
    >
      <title>Blankist icon</title>

      <g
        transform="translate(0.000000,500.000000) scale(0.100000,-0.100000)"
        stroke="none"
      >
        <path
          d="M1441 4561 c-50 -70 -40 -114 66 -288 103 -170 123 -217 123 -283 0
-107 -54 -171 -287 -336 -147 -105 -183 -146 -183 -209 1 -52 24 -101 100
-215 85 -126 112 -188 118 -271 8 -109 -27 -159 -110 -159 -99 0 -198 154
-198 306 0 50 -2 54 -24 54 -33 0 -132 -108 -164 -180 -14 -30 -28 -77 -30
-105 -5 -65 9 -83 136 -168 105 -70 132 -100 132 -142 0 -41 -16 -61 -80 -100
-76 -46 -125 -95 -158 -160 -20 -40 -27 -68 -30 -141 -8 -164 28 -243 179
-401 174 -181 186 -250 74 -410 -97 -138 -119 -188 -120 -268 0 -89 25 -143
108 -231 327 -351 1358 -550 2014 -389 213 51 401 153 490 264 91 113 88 139
-24 232 -83 69 -115 121 -90 146 8 9 52 17 118 22 119 10 173 31 212 83 42 55
49 104 41 281 -9 228 9 295 118 428 30 36 65 90 77 120 52 121 64 323 23 379
-24 32 -81 39 -104 13 -9 -10 -28 -47 -42 -82 -14 -36 -36 -75 -48 -88 -29
-31 -77 -31 -106 0 -19 20 -22 35 -22 104 0 47 -8 112 -20 157 -34 133 -88
220 -321 516 -90 115 -122 184 -122 260 0 74 17 110 117 249 100 137 136 211
143 289 7 78 -10 134 -56 182 -67 70 -115 47 -130 -64 -16 -116 -42 -130 -259
-142 -106 -5 -141 -11 -174 -28 -99 -50 -108 -133 -38 -330 66 -188 66 -305
-1 -381 -40 -45 -93 -60 -160 -46 -134 29 -166 90 -118 227 29 84 23 161 -19
247 -59 120 -204 237 -293 237 -54 0 -63 -17 -63 -129 -1 -89 -3 -101 -29
-139 -52 -79 -149 -120 -217 -92 -74 31 -139 157 -126 244 11 70 52 141 109
187 93 76 128 113 153 161 51 101 21 214 -81 305 -46 42 -76 58 -154 85 -110
38 -225 104 -310 177 -71 62 -108 67 -140 22z m1479 -1856 c36 -9 103 -35 150
-58 70 -34 102 -58 181 -137 80 -79 103 -109 138 -180 54 -113 71 -184 71
-303 0 -129 -21 -221 -78 -337 -37 -76 -62 -110 -122 -171 -41 -42 -104 -93
-140 -113 -36 -21 -67 -40 -70 -43 -3 -2 -7 -58 -10 -123 -4 -99 -8 -123 -26
-146 -35 -47 -67 -66 -117 -66 -56 0 -78 12 -114 59 -27 35 -28 41 -32 180 -6
259 11 302 134 343 251 84 366 370 242 604 -36 67 -99 135 -161 171 -88 52
-135 56 -523 53 l-358 -3 -68 -32 c-274 -130 -338 -475 -126 -683 56 -55 67
-62 191 -119 57 -27 69 -37 88 -76 20 -41 21 -57 18 -224 -3 -195 -6 -206 -70
-254 -34 -25 -112 -25 -146 0 -59 44 -67 65 -71 196 l-3 122 -85 55 c-96 62
-195 161 -241 241 -17 30 -43 90 -58 134 -26 73 -28 92 -28 225 0 132 2 151
26 218 42 115 85 180 177 273 130 130 260 193 431 209 47 4 231 6 410 5 265
-3 337 -6 390 -20z m-670 -563 c44 -22 80 -75 80 -119 0 -140 -158 -202 -249
-98 -38 43 -47 90 -28 137 36 86 118 120 197 80z m566 2 c75 -36 103 -122 63
-193 -28 -50 -94 -86 -141 -77 -142 28 -173 204 -47 268 43 22 81 23 125 2z
m-275 -569 c62 -33 69 -59 69 -265 0 -166 -2 -188 -20 -217 -54 -90 -192 -86
-241 7 -16 30 -19 58 -19 208 0 184 4 206 52 248 12 12 30 24 38 27 30 11 92
7 121 -8z"
        />
        <path
          d="M2992 4548 c-7 -7 -12 -22 -12 -34 0 -12 -25 -70 -56 -130 -51 -100
-56 -113 -52 -162 6 -63 38 -103 104 -128 89 -34 151 20 180 157 20 94 13 177
-21 234 -35 60 -112 94 -143 63z"
        />
        <path
          d="M1012 4310 c-42 -26 -88 -99 -103 -164 -17 -76 -9 -199 15 -225 48
-53 145 -49 200 8 35 37 47 87 35 159 -5 31 -12 93 -15 137 -4 44 -11 86 -16
93 -16 18 -79 14 -116 -8z"
        />
        <path
          d="M4022 3177 c-6 -6 -14 -26 -18 -42 -4 -17 -29 -72 -55 -123 -37 -69
-49 -104 -49 -136 0 -102 113 -176 200 -131 52 27 90 134 90 254 0 71 -38 154
-81 176 -34 18 -73 19 -87 2z"
        />
      </g>
    </svg>
  )
}

function IconOpenAI({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      fill="currentColor"
      viewBox="0 0 24 24"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('size-4', className)}
      {...props}
    >
      <title>OpenAI icon</title>
      <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" />
    </svg>
  )
}

function IconVercel({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      aria-label="Vercel logomark"
      role="img"
      viewBox="0 0 74 64"
      className={cn('size-4', className)}
      {...props}
    >
      <path
        d="M37.5896 0.25L74.5396 64.25H0.639648L37.5896 0.25Z"
        fill="currentColor"
      ></path>
    </svg>
  )
}

function IconGitHub({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      className={cn('size-4', className)}
      {...props}
    >
      <title>GitHub</title>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  )
}

function IconSeparator({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      fill="none"
      shapeRendering="geometricPrecision"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1"
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={cn('size-4', className)}
      {...props}
    >
      <path d="M16.88 3.549L7.12 20.451"></path>
    </svg>
  )
}

function IconArrowDown({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn('size-4', className)}
      {...props}
    >
      <path d="m205.66 149.66-72 72a8 8 0 0 1-11.32 0l-72-72a8 8 0 0 1 11.32-11.32L120 196.69V40a8 8 0 0 1 16 0v156.69l58.34-58.35a8 8 0 0 1 11.32 11.32Z" />
    </svg>
  )
}

function IconArrowRight({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn('size-4', className)}
      {...props}
    >
      <path d="m221.66 133.66-72 72a8 8 0 0 1-11.32-11.32L196.69 136H40a8 8 0 0 1 0-16h156.69l-58.35-58.34a8 8 0 0 1 11.32-11.32l72 72a8 8 0 0 1 0 11.32Z" />
    </svg>
  )
}

function IconUser({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn('size-8', className)}
      {...props}
    >
      <path d="M36.8,10.7c-13,2.6-23.5,13.2-26,26.4c-1,5.1-1,176.6,0,181.8c2.6,13.3,13.1,23.8,26.4,26.3c5.1,1,176.6,1,181.8,0c13.3-2.6,23.8-13.1,26.3-26.4c1-5.1,1-176.6,0-181.7c-2.6-13.4-13-23.9-26.3-26.4C214,9.8,41.5,9.8,36.8,10.7z M220.2,26.5c4.1,1.9,7.4,5.2,9.3,9.3l1.5,3.1V128v89.1l-1.5,3.1c-1.9,4.1-5.2,7.4-9.3,9.3l-3.1,1.5H128H38.9l-3.1-1.5c-4.1-1.9-7.4-5.2-9.3-9.3l-1.5-3.1V128V38.8l1.5-3.1c2.4-5.1,7.4-9.3,12.4-10.5c1-0.2,39.7-0.4,90-0.4l88.2,0.1L220.2,26.5z" />
      <path d="M68.9,75c-3.8,1.2-6.4,2.9-9,5.8c-6,6.5-7.1,15-3.1,23.1c4.5,9.2,15.5,13.5,25.2,9.8c14.9-5.6,18-25.4,5.5-35.2c-3.6-2.9-6.8-4-11.8-4.2C72.5,74.1,71,74.3,68.9,75z" />
      <path d="M132,74.6c-4.5,1.1-9.4,4.5-11.9,8.4c-2.7,4.1-3.7,7.6-3.4,12.7c0.2,3.7,0.4,4.7,1.9,7.7c6.5,13.2,23.5,15.8,33.4,4.9c7.3-7.9,7.2-19.9-0.2-27.7c-2.8-2.9-6-4.9-9.6-5.8C139.5,74,134.7,73.9,132,74.6z" />
      <path d="M61.3,152c-0.8,3.9-1.4,7-1.3,7.1c0.1,0.2,89.5,19,90.1,19c0.3,0,3.3-13.9,3-14.2c-0.2-0.2-89-18.9-89.8-18.9C63,145,62.1,148.1,61.3,152z" />
    </svg>
  )
}

function IconBot({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      fill="currentColor"
      viewBox="0 0 256 256"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('size-8', className)}
      {...props}
    >
      <title>Bot icon</title>
      <path d="M36.6,10.7c-6.7,1.3-13.3,5.1-18,10.3c-3.3,3.6-5.3,7-7.1,11.9l-1.4,4.1L10,125.7c-0.1,65.4,0,89.6,0.4,92.2c2.1,13.7,12.9,24.8,26.5,27.5c5.2,1,176.8,1,182,0c13.3-2.6,23.8-13.1,26.4-26.5c1-5.1,1-176.7,0-181.8c-2.6-13.4-13-23.9-26.4-26.5C213.9,9.7,41.4,9.8,36.6,10.7z M220.2,26.4c4.1,1.9,7.4,5.2,9.3,9.3l1.5,3.1l0.1,28.4l0.1,28.5h-14.1h-14.1l-0.5-2c-0.9-3.2-4-9.1-6.3-12.1c-10-12.4-27.7-16-41.7-8.7c-7.7,4-13.3,10.6-16.1,18.8l-1.3,3.7h-9.3h-9.3l-0.8-2.5c-2.8-8.9-9.2-16.3-17.3-20.3c-5.3-2.6-8.8-3.4-14.7-3.4c-10.4,0-19.7,4.4-26.2,12.4c-2.3,3-5.4,8.9-6.3,12.1l-0.5,2H38.7H24.6l0.1-28.5l0.1-28.4l1.5-3.1c2.4-5.1,7.4-9.3,12.4-10.5c1-0.2,39.7-0.4,90-0.4l88.3,0.1L220.2,26.4z M54.1,113.9c3.4,10.7,13.8,19.7,25.3,22c4.1,0.8,12.4,0.3,16.2-1c10.4-3.5,18.9-12,21.9-21.7l0.8-2.8h9.5h9.5l0.8,2.8c1.5,4.8,4.2,9.1,8.5,13.5c3.3,3.3,4.7,4.3,8.4,6.1c5.3,2.6,9.3,3.5,15.2,3.5c6.9,0,13.3-2,19.2-6.1c5.2-3.5,10.3-10.4,12.2-16.3l1.1-3.4H217h14.2l-0.1,53.3l-0.1,53.4l-1.5,3.1c-1.9,4.1-5.2,7.4-9.3,9.3l-3.1,1.5h-89.2H38.7l-3.1-1.5c-4.1-1.9-7.4-5.2-9.3-9.3l-1.5-3.1l-0.1-53.4l-0.1-53.3h14.2H53L54.1,113.9z" />
      <path d="M120.6,175.9v20.7h14.5h14.5v-7.4v-7.4h-7.1h-7.1v-13.4v-13.4h-7.4h-7.4V175.9L120.6,175.9z" />
    </svg>
  )
}

function IconQuestion({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn('size-4', className)}
      {...props}
    >
      <path d="M117.1,10.3C89.2,13,63.8,25.1,44.1,45C25.8,63.5,15,85.3,10.9,111.9c-1.2,8.2-1.1,24.9,0.2,33.5c2.1,13.1,5.4,23.6,11.2,35.3c9.3,18.8,23.2,34.5,40.9,46.3c9.9,6.6,24.6,13,36.3,15.8c10,2.4,16.3,3.2,28,3.2c14.8,0,24.3-1.4,37.7-5.8c17.3-5.7,33.5-15.8,46.6-29.1c9.7-9.8,15.8-18.5,22.1-31.1c5.9-11.9,9.4-23.4,11.4-37.4c0.8-5.4,0.8-23.6,0-29.1c-3.9-27.4-15.1-50.2-33.8-69C193.3,26.2,170.9,15,144.6,11C138.9,10.1,123.1,9.7,117.1,10.3z M142.6,55.7c8.4,2.2,16.3,7,20.8,12.7c2.5,3.2,5.9,9.9,7,13.9c0.6,2.3,0.8,4.8,0.8,10.6c0,8.5-0.6,11.5-3.7,17.5c-2.5,4.9-4.4,7.2-15.4,18.2c-5.8,5.8-11.1,11.6-11.8,12.7c-1.7,3-2.6,7.6-2.6,13.9c0,8.8-0.5,9.2-10.9,9l-6.8-0.1l-1.2-1.3l-1.2-1.3l0.2-9.5c0.3-14.8,0.8-15.8,14.1-28.7c10.9-10.6,14.5-14.8,16.9-19.5c6.7-13.2-0.9-29-15.3-31.8c-5.6-1.1-12.7,0.2-17.1,3c-4.6,2.9-8.9,9-10.4,14.8c-0.7,2.9-2.4,4.8-3.9,4.8c-0.4,0-3.7-0.3-7.3-0.7c-3.6-0.4-6.9-0.7-7.5-0.7c-1.5,0-2.9-1.6-2.9-3.4c0-3.5,3.4-12.1,6.6-16.9c6.4-9.4,17-16.2,28.5-18c1.9-0.3,3.8-0.6,4.2-0.7c0.4-0.1,3.7-0.1,7.4,0C136.6,54.5,138.9,54.8,142.6,55.7z M130.8,180.3c2.4,0.7,5.3,3.2,6.5,5.6c1.4,2.6,1.4,7.2,0,9.7c-3.5,6.7-11.7,8.2-17.1,3.3c-2.6-2.4-3.8-4.9-3.8-8.2c0-3.1,1.2-5.7,3.6-8C123,180,126.9,179.1,130.8,180.3z" />
    </svg>
  )
}

function IconScan({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      fill="currentColor"
      viewBox="0 0 256 256"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('size-8', className)}
      {...props}
    >
      <title>Scan icon</title>
      <path d="M24.8,212.1v-48.7H10v60.5c0,12.2,9.9,22.1,22.1,22.1h60.5v-14.6L41.7,232C29.5,232,24.8,224.3,24.8,212.1z M24.8,43.9c0-12.2,7-19.2,19.2-19.2h48.6V10H32.1C19.9,10,10,19.9,10,32.1v60.5h14.8V43.9L24.8,43.9z M223.9,10h-60.5v14.8h49c12.2,0,18.9,7,18.9,19.2v48.7H246V32.1C246,19.9,236.1,10,223.9,10z M230.9,212.1c0,12.2-6.6,22.1-18.8,22.1h-48.7V246h60.5c12.2,0,22.1-9.9,22.1-22.1v-60.5h-15.1V212.1L230.9,212.1z M33.6,135.4h188.8v-14.8H33.6V135.4z" />
    </svg>
  )
}

function IconPlus({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn('size-4', className)}
      {...props}
    >
      <path d="M224 128a8 8 0 0 1-8 8h-80v80a8 8 0 0 1-16 0v-80H40a8 8 0 0 1 0-16h80V40a8 8 0 0 1 16 0v80h80a8 8 0 0 1 8 8Z" />
    </svg>
  )
}

function IconArrowElbow({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn('size-4', className)}
      {...props}
    >
      <path d="M200 32v144a8 8 0 0 1-8 8H67.31l34.35 34.34a8 8 0 0 1-11.32 11.32l-48-48a8 8 0 0 1 0-11.32l48-48a8 8 0 0 1 11.32 11.32L67.31 168H184V32a8 8 0 0 1 16 0Z" />
    </svg>
  )
}

function IconSpinner({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn('size-4 animate-spin', className)}
      {...props}
    >
      <path d="M232 128a104 104 0 0 1-208 0c0-41 23.81-78.36 60.66-95.27a8 8 0 0 1 6.68 14.54C60.15 61.59 40 93.27 40 128a88 88 0 0 0 176 0c0-34.73-20.15-66.41-51.34-80.73a8 8 0 0 1 6.68-14.54C208.19 49.64 232 87 232 128Z" />
    </svg>
  )
}

function IconMessage({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn('size-4', className)}
      {...props}
    >
      <path d="M216 48H40a16 16 0 0 0-16 16v160a15.84 15.84 0 0 0 9.25 14.5A16.05 16.05 0 0 0 40 240a15.89 15.89 0 0 0 10.25-3.78.69.69 0 0 0 .13-.11L82.5 208H216a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16ZM40 224Zm176-32H82.5a16 16 0 0 0-10.3 3.75l-.12.11L40 224V64h176Z" />
    </svg>
  )
}

function IconTrash({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn('size-4', className)}
      {...props}
    >
      <path d="M216 48h-40v-8a24 24 0 0 0-24-24h-48a24 24 0 0 0-24 24v8H40a8 8 0 0 0 0 16h8v144a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16V64h8a8 8 0 0 0 0-16ZM96 40a8 8 0 0 1 8-8h48a8 8 0 0 1 8 8v8H96Zm96 168H64V64h128Zm-80-104v64a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0Zm48 0v64a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0Z" />
    </svg>
  )
}

function IconRefresh({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn('size-4', className)}
      {...props}
    >
      <path d="M197.67 186.37a8 8 0 0 1 0 11.29C196.58 198.73 170.82 224 128 224c-37.39 0-64.53-22.4-80-39.85V208a8 8 0 0 1-16 0v-48a8 8 0 0 1 8-8h48a8 8 0 0 1 0 16H55.44C67.76 183.35 93 208 128 208c36 0 58.14-21.46 58.36-21.68a8 8 0 0 1 11.31.05ZM216 40a8 8 0 0 0-8 8v23.85C192.53 54.4 165.39 32 128 32c-42.82 0-68.58 25.27-69.66 26.34a8 8 0 0 0 11.3 11.34C69.86 69.46 92 48 128 48c35 0 60.24 24.65 72.56 40H168a8 8 0 0 0 0 16h48a8 8 0 0 0 8-8V48a8 8 0 0 0-8-8Z" />
    </svg>
  )
}

function IconStop({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn('size-4', className)}
      {...props}
    >
      <path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24Zm0 192a88 88 0 1 1 88-88 88.1 88.1 0 0 1-88 88Zm24-120h-48a8 8 0 0 0-8 8v48a8 8 0 0 0 8 8h48a8 8 0 0 0 8-8v-48a8 8 0 0 0-8-8Zm-8 48h-32v-32h32Z" />
    </svg>
  )
}

function IconSidebar({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn('size-4', className)}
      {...props}
    >
      <path d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16ZM40 56h40v144H40Zm176 144H96V56h120v144Z" />
    </svg>
  )
}

function IconMoon({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn('size-4', className)}
      {...props}
    >
      <path d="M233.54 142.23a8 8 0 0 0-8-2 88.08 88.08 0 0 1-109.8-109.8 8 8 0 0 0-10-10 104.84 104.84 0 0 0-52.91 37A104 104 0 0 0 136 224a103.09 103.09 0 0 0 62.52-20.88 104.84 104.84 0 0 0 37-52.91 8 8 0 0 0-1.98-7.98Zm-44.64 48.11A88 88 0 0 1 65.66 67.11a89 89 0 0 1 31.4-26A106 106 0 0 0 96 56a104.11 104.11 0 0 0 104 104 106 106 0 0 0 14.92-1.06 89 89 0 0 1-26.02 31.4Z" />
    </svg>
  )
}

function IconSun({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn('size-4', className)}
      {...props}
    >
      <path d="M120 40V16a8 8 0 0 1 16 0v24a8 8 0 0 1-16 0Zm72 88a64 64 0 1 1-64-64 64.07 64.07 0 0 1 64 64Zm-16 0a48 48 0 1 0-48 48 48.05 48.05 0 0 0 48-48ZM58.34 69.66a8 8 0 0 0 11.32-11.32l-16-16a8 8 0 0 0-11.32 11.32Zm0 116.68-16 16a8 8 0 0 0 11.32 11.32l16-16a8 8 0 0 0-11.32-11.32ZM192 72a8 8 0 0 0 5.66-2.34l16-16a8 8 0 0 0-11.32-11.32l-16 16A8 8 0 0 0 192 72Zm5.66 114.34a8 8 0 0 0-11.32 11.32l16 16a8 8 0 0 0 11.32-11.32ZM48 128a8 8 0 0 0-8-8H16a8 8 0 0 0 0 16h24a8 8 0 0 0 8-8Zm80 80a8 8 0 0 0-8 8v24a8 8 0 0 0 16 0v-24a8 8 0 0 0-8-8Zm112-88h-24a8 8 0 0 0 0 16h24a8 8 0 0 0 0-16Z" />
    </svg>
  )
}

function IconCopy({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn('size-4', className)}
      {...props}
    >
      <path d="M216 32H88a8 8 0 0 0-8 8v40H40a8 8 0 0 0-8 8v128a8 8 0 0 0 8 8h128a8 8 0 0 0 8-8v-40h40a8 8 0 0 0 8-8V40a8 8 0 0 0-8-8Zm-56 176H48V96h112Zm48-48h-32V88a8 8 0 0 0-8-8H96V48h112Z" />
    </svg>
  )
}

function IconCheck({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn('size-4', className)}
      {...props}
    >
      <path d="m229.66 77.66-128 128a8 8 0 0 1-11.32 0l-56-56a8 8 0 0 1 11.32-11.32L96 188.69 218.34 66.34a8 8 0 0 1 11.32 11.32Z" />
    </svg>
  )
}

function IconDownload({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn('size-4', className)}
      {...props}
    >
      <path d="M224 152v56a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16v-56a8 8 0 0 1 16 0v56h160v-56a8 8 0 0 1 16 0Zm-101.66 5.66a8 8 0 0 0 11.32 0l40-40a8 8 0 0 0-11.32-11.32L136 132.69V40a8 8 0 0 0-16 0v92.69l-26.34-26.35a8 8 0 0 0-11.32 11.32Z" />
    </svg>
  )
}

function IconClose({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn('size-4', className)}
      {...props}
    >
      <path d="M205.66 194.34a8 8 0 0 1-11.32 11.32L128 139.31l-66.34 66.35a8 8 0 0 1-11.32-11.32L116.69 128 50.34 61.66a8 8 0 0 1 11.32-11.32L128 116.69l66.34-66.35a8 8 0 0 1 11.32 11.32L139.31 128Z" />
    </svg>
  )
}

function IconEdit({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={cn('size-4', className)}
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
      />
    </svg>
  )
}

function IconShare({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      className={cn('size-4', className)}
      viewBox="0 0 256 256"
      {...props}
    >
      <path d="m237.66 106.35-80-80A8 8 0 0 0 144 32v40.35c-25.94 2.22-54.59 14.92-78.16 34.91-28.38 24.08-46.05 55.11-49.76 87.37a12 12 0 0 0 20.68 9.58c11-11.71 50.14-48.74 107.24-52V192a8 8 0 0 0 13.66 5.65l80-80a8 8 0 0 0 0-11.3ZM160 172.69V144a8 8 0 0 0-8-8c-28.08 0-55.43 7.33-81.29 21.8a196.17 196.17 0 0 0-36.57 26.52c5.8-23.84 20.42-46.51 42.05-64.86C99.41 99.77 127.75 88 152 88a8 8 0 0 0 8-8V51.32L220.69 112Z" />
    </svg>
  )
}

function IconUsers({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      className={cn('size-4', className)}
      viewBox="0 0 256 256"
      {...props}
    >
      <path d="M117.25 157.92a60 60 0 1 0-66.5 0 95.83 95.83 0 0 0-47.22 37.71 8 8 0 1 0 13.4 8.74 80 80 0 0 1 134.14 0 8 8 0 0 0 13.4-8.74 95.83 95.83 0 0 0-47.22-37.71ZM40 108a44 44 0 1 1 44 44 44.05 44.05 0 0 1-44-44Zm210.14 98.7a8 8 0 0 1-11.07-2.33A79.83 79.83 0 0 0 172 168a8 8 0 0 1 0-16 44 44 0 1 0-16.34-84.87 8 8 0 1 1-5.94-14.85 60 60 0 0 1 55.53 105.64 95.83 95.83 0 0 1 47.22 37.71 8 8 0 0 1-2.33 11.07Z" />
    </svg>
  )
}

function IconExternalLink({
  className,
  ...props
}: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      className={cn('size-4', className)}
      viewBox="0 0 256 256"
      {...props}
    >
      <path d="M224 104a8 8 0 0 1-16 0V59.32l-66.33 66.34a8 8 0 0 1-11.32-11.32L196.68 48H152a8 8 0 0 1 0-16h64a8 8 0 0 1 8 8Zm-40 24a8 8 0 0 0-8 8v72H48V80h72a8 8 0 0 0 0-16H48a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-72a8 8 0 0 0-8-8Z" />
    </svg>
  )
}

function IconChevronUpDown({
  className,
  ...props
}: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      className={cn('size-4', className)}
      viewBox="0 0 256 256"
      {...props}
    >
      <path d="M181.66 170.34a8 8 0 0 1 0 11.32l-48 48a8 8 0 0 1-11.32 0l-48-48a8 8 0 0 1 11.32-11.32L128 212.69l42.34-42.35a8 8 0 0 1 11.32 0Zm-96-84.68L128 43.31l42.34 42.35a8 8 0 0 0 11.32-11.32l-48-48a8 8 0 0 0-11.32 0l-48 48a8 8 0 0 0 11.32 11.32Z" />
    </svg>
  )
}

export {
  IconEdit,
  IconBlankist,
  IconNextChat,
  IconOpenAI,
  IconBot,
  IconQuestion,
  IconScan,
  IconVercel,
  IconGitHub,
  IconSeparator,
  IconArrowDown,
  IconArrowRight,
  IconUser,
  IconPlus,
  IconArrowElbow,
  IconSpinner,
  IconMessage,
  IconTrash,
  IconRefresh,
  IconStop,
  IconSidebar,
  IconMoon,
  IconSun,
  IconCopy,
  IconCheck,
  IconDownload,
  IconClose,
  IconShare,
  IconUsers,
  IconExternalLink,
  IconChevronUpDown
}
