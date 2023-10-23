import { Button } from '..';
import './styles.scss';

interface ModalProps {
  title?: string;
  body: React.ReactNode;
  actionPrimary?: () => void;
  actionSecondary?: () => void;
  canClose?: boolean;
  nonDissmissable?: boolean;
  closeModal: () => void;
}

/**
 * User Modal component
 */
export const Modal = ({
  title,
  body,
  actionPrimary,
  actionSecondary,
  canClose = true,
  nonDissmissable,
  closeModal
}: ModalProps) => {

  return (
    <div
      className="modal-backdrop"
      onClick={nonDissmissable ? undefined : closeModal}
    >
      <div className="modal-styled">
        { title && 
          <header className="modal-header">
            {title}
          </header>
        }
        <div className="modal-body">
          {body}
        </div>
        <footer className="modal-footer">
          { canClose && 
            <Button
            onClick={actionSecondary ? () => {
              actionSecondary(); closeModal();
            } : undefined}
            >
              Close
            </Button>
          }
          { actionPrimary &&
            <Button
              primary
              onClick={actionPrimary}
            >
              Action
            </Button>
          }
        </footer>
        { canClose &&
          <button className="modal-close" onClick={closeModal}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        }
      </div>
    </div>
  );
};
