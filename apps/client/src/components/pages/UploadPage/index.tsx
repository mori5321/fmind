import { useVirtualizer } from '@tanstack/react-virtual'
import { useMemo, useRef, useState, useEffect } from 'react'

import styles from './styles.module.scss'

type FileMap = {
  [key: string]: {
    file: File;
    uploaded: boolean;
  };
};

export const UploadPage = () => {
  const [loading, setLoading] = useState(false)
  const tmpFileMap = useRef<FileMap>({} as FileMap)
  const [fileMap, setFileMap] = useState<FileMap>({} as FileMap)

  const handleOpenPicker = async () => {
    const dirHandle = await window.showDirectoryPicker({ mode: 'read' })

    setLoading(true)

    for await (const [_name, handler] of dirHandle.entries()) {
      if (handler.kind === 'file') {
        const file = await handler.getFile()

        tmpFileMap.current[file.name] = { file, uploaded: false }
      }
    }

    setLoading(false)

    setFileMap(tmpFileMap.current)
  }

  const keys = useMemo(() => {
    return Object.keys(fileMap)
  }, [fileMap])

  const count = useMemo(() => {
    return keys.length
  }, [keys])

  const parentRef = useRef<HTMLDivElement | null>(null)

  const rowVirtualizer = useVirtualizer<HTMLDivElement | null>({
    count,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 20,
    overscan: 5,
    debug: true,
    enableSmoothScroll: true,
  })

  const getFileFromVirtual = (index: number): File | null => {
    const key = keys[index]
    if (!key) return null

    return fileMap[key].file
  }

  // Workaround
  // https://github.com/TanStack/virtual/issues/322
  useEffect(() => {
    return () => {
      rowVirtualizer.scrollElement = null
    }
  }, [rowVirtualizer])

  return (
    <div className={styles.wrapper}>
      <button onClick={handleOpenPicker}>Open</button>
      <h2>{keys.length}</h2>
      <div
        ref={parentRef}
        style={{
          height: '800px',
          width: '100%',
          background: '#f9f9f9',
          overflow: 'auto',
        }}
      >
        <div
          style={{
            height: `${rowVirtualizer.getTotalSize()}px`,
            width: '100%',
            position: 'relative',
          }}
        >
          {loading
            ? 'Loading ...'
            : rowVirtualizer.getVirtualItems().map((virtualRow) => {
              return (
                <div
                  key={virtualRow.index}
                  ref={virtualRow.measureElement}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: `${virtualRow.size}px`,
                    transform: `translateY(${virtualRow.start}px)`,
                  }}
                >
                  {getFileFromVirtual(virtualRow.index)?.name}
                </div>
              )
            })}
        </div>
      </div>
    </div>
  )
}
