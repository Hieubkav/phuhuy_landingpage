'use client';

import { useState, useEffect } from 'react';

interface TypewriterEffectProps {
  className?: string;
}

export default function TypewriterEffect({ className = '' }: TypewriterEffectProps) {
  const [displayText, setDisplayText] = useState('');
  const [currentPhase, setCurrentPhase] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const phases = [
    { text: 'Content', nextAction: 'delete' },
    { text: 'Creator', nextAction: 'add' },
    { text: 'Creator & ', nextAction: 'continue' },
    { text: 'Creator & Video', nextAction: 'add' },
    { text: 'Creator & Video ', nextAction: 'continue' },
    { text: 'Creator & Video Editor', nextAction: 'complete' }
  ];

  const fullText = 'Content Creator & Video Editor';

  useEffect(() => {
    const typeSpeed = 120; // Tốc độ đánh máy (ms)
    const deleteSpeed = 80; // Tốc độ xóa (ms)
    const pauseBetweenWords = 500; // Dừng giữa các từ (ms)
    const displayFullTextTime = 2000; // Hiển thị full text (ms)

    let timeout: NodeJS.Timeout;

    const typeWriter = () => {
      const currentPhaseData = phases[currentPhase];
      const targetText = currentPhaseData.text;

      if (!isDeleting) {
        // Đang đánh máy
        if (displayText.length < targetText.length) {
          setDisplayText(targetText.slice(0, displayText.length + 1));
          timeout = setTimeout(typeWriter, typeSpeed);
        } else {
          // Hoàn thành đánh từ hiện tại
          if (currentPhaseData.nextAction === 'delete') {
            // Dừng một chút rồi bắt đầu xóa
            timeout = setTimeout(() => {
              setIsDeleting(true);
              typeWriter();
            }, pauseBetweenWords);
          } else if (currentPhaseData.nextAction === 'add') {
            // Dừng một chút rồi chuyển sang phase tiếp theo
            timeout = setTimeout(() => {
              setCurrentPhase(prev => prev + 1);
            }, pauseBetweenWords);
          } else if (currentPhaseData.nextAction === 'continue') {
            // Tiếp tục ngay lập tức với phase tiếp theo
            setCurrentPhase(prev => prev + 1);
          } else if (currentPhaseData.nextAction === 'complete') {
            // Hiển thị full text trong một thời gian rồi restart
            timeout = setTimeout(() => {
              setDisplayText('');
              setCurrentPhase(0);
              setIsDeleting(false);
            }, displayFullTextTime);
          }
        }
      } else {
        // Đang xóa
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
          timeout = setTimeout(typeWriter, deleteSpeed);
        } else {
          // Hoàn thành xóa, chuyển sang phase tiếp theo
          setIsDeleting(false);
          setCurrentPhase(prev => prev + 1);
        }
      }
    };

    timeout = setTimeout(typeWriter, typeSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, currentPhase, isDeleting]);

  return (
    <p className={className}>
      {displayText}
      <span className="animate-pulse">|</span>
    </p>
  );
}
